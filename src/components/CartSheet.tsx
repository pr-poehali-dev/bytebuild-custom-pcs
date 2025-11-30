import { useEffect, useState } from 'react';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface CartItem {
  id: number;
  build_name: string;
  build_price: number;
  build_specs: string;
  build_category: string;
  quantity: number;
}

interface CartSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  userId: number | null;
}

export const CartSheet = ({ open, onOpenChange, userId }: CartSheetProps) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchCart = async () => {
    if (!userId) return;

    setLoading(true);
    try {
      const response = await fetch('https://functions.poehali.dev/c0799a34-2ce3-475b-9e1e-fa0970e0acb6', {
        method: 'GET',
        headers: { 'X-User-Id': userId.toString() },
      });

      const data = await response.json();
      setItems(data.items || []);
      setTotal(data.total || 0);
    } catch (err) {
      console.error('Failed to fetch cart:', err);
    } finally {
      setLoading(false);
    }
  };

  const removeItem = async (itemId: number) => {
    if (!userId) return;

    try {
      await fetch(`https://functions.poehali.dev/c0799a34-2ce3-475b-9e1e-fa0970e0acb6?id=${itemId}`, {
        method: 'DELETE',
        headers: { 'X-User-Id': userId.toString() },
      });
      fetchCart();
    } catch (err) {
      console.error('Failed to remove item:', err);
    }
  };

  useEffect(() => {
    if (open && userId) {
      fetchCart();
    }
  }, [open, userId]);

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <Icon name="ShoppingCart" size={24} className="text-primary" />
            Корзина
          </SheetTitle>
          <SheetDescription>
            {items.length > 0 ? `${items.length} товаров на сумму ${total.toLocaleString('ru-RU')} ₽` : 'Корзина пуста'}
          </SheetDescription>
        </SheetHeader>

        <div className="mt-8 space-y-4">
          {loading ? (
            <div className="text-center text-muted-foreground">Загрузка...</div>
          ) : items.length === 0 ? (
            <div className="text-center py-12">
              <Icon name="ShoppingCart" size={64} className="mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">Ваша корзина пуста</p>
            </div>
          ) : (
            <>
              {items.map((item) => (
                <Card key={item.id}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-bold">{item.build_name}</h4>
                        <p className="text-sm text-muted-foreground">{item.build_specs}</p>
                        <p className="text-xs text-primary mt-1">{item.build_category}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeItem(item.id)}
                        className="text-destructive hover:text-destructive"
                      >
                        <Icon name="Trash2" size={18} />
                      </Button>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Количество: {item.quantity}</span>
                      <span className="font-bold text-primary">{item.build_price.toLocaleString('ru-RU')} ₽</span>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <div className="pt-4 border-t border-border">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xl font-bold">Итого:</span>
                  <span className="text-2xl font-black text-primary">{total.toLocaleString('ru-RU')} ₽</span>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                  <Icon name="CreditCard" className="mr-2" size={20} />
                  Оформить заказ
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
