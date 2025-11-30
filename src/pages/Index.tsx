import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [budget, setBudget] = useState([80000]);
  const [purpose, setPurpose] = useState('gaming');

  const configurations = {
    gaming: [
      { name: 'Начальный', price: 60000, cpu: 'Intel Core i5-12400F', gpu: 'RTX 3060', ram: '16GB DDR4', storage: '512GB NVMe' },
      { name: 'Средний', price: 100000, cpu: 'Intel Core i5-13600KF', gpu: 'RTX 4060 Ti', ram: '32GB DDR4', storage: '1TB NVMe' },
      { name: 'Продвинутый', price: 150000, cpu: 'Intel Core i7-13700K', gpu: 'RTX 4070 Ti', ram: '32GB DDR5', storage: '2TB NVMe' },
      { name: 'Экстремальный', price: 250000, cpu: 'Intel Core i9-13900K', gpu: 'RTX 4090', ram: '64GB DDR5', storage: '4TB NVMe' },
    ],
    work: [
      { name: 'Офисный', price: 40000, cpu: 'Intel Core i3-12100', gpu: 'Встроенная', ram: '16GB DDR4', storage: '512GB NVMe' },
      { name: 'Продуктивный', price: 80000, cpu: 'AMD Ryzen 5 5600', gpu: 'RTX 3050', ram: '32GB DDR4', storage: '1TB NVMe' },
      { name: 'Профессиональный', price: 150000, cpu: 'AMD Ryzen 9 5900X', gpu: 'RTX 4060', ram: '64GB DDR4', storage: '2TB NVMe' },
    ],
    creative: [
      { name: 'Начальный', price: 100000, cpu: 'AMD Ryzen 7 5800X', gpu: 'RTX 3060 Ti', ram: '32GB DDR4', storage: '1TB NVMe' },
      { name: 'Продвинутый', price: 180000, cpu: 'AMD Ryzen 9 5950X', gpu: 'RTX 4070', ram: '64GB DDR4', storage: '2TB NVMe' },
      { name: 'Студийный', price: 300000, cpu: 'AMD Threadripper', gpu: 'RTX 4090', ram: '128GB DDR4', storage: '4TB NVMe' },
    ],
  };

  const getRecommendation = () => {
    const configs = configurations[purpose as keyof typeof configurations];
    return configs.find(c => c.price <= budget[0]) || configs[0];
  };

  const recommended = getRecommendation();

  const readyBuilds = [
    {
      name: 'Гейм-Драйв 3060',
      price: 95000,
      image: '🎮',
      specs: 'i5-12400F • RTX 3060 • 16GB',
      category: 'Игровой',
    },
    {
      name: 'Работяга Pro',
      price: 75000,
      image: '💼',
      specs: 'Ryzen 5 5600 • RTX 3050 • 32GB',
      category: 'Офисный',
    },
    {
      name: 'Творец 4070',
      price: 175000,
      image: '🎨',
      specs: 'Ryzen 9 5950X • RTX 4070 • 64GB',
      category: 'Креатив',
    },
    {
      name: 'Нитро 4090',
      price: 280000,
      image: '⚡',
      specs: 'i9-13900K • RTX 4090 • 64GB',
      category: 'Топ',
    },
  ];

  const portfolio = [
    { title: 'RGB Monster', description: 'Игровая сборка с полной RGB-подсветкой', emoji: '🌈' },
    { title: 'Silent Workstation', description: 'Бесшумная рабочая станция', emoji: '🤫' },
    { title: 'White Dragon', description: 'Белая эстетика premium-класса', emoji: '🐉' },
    { title: 'Compact Beast', description: 'Мощь в компактном корпусе', emoji: '📦' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-3xl">⚡</div>
            <span className="text-2xl font-bold gradient-racing bg-clip-text text-transparent">ByteBuild</span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#calculator" className="hover:text-primary transition-colors">Калькулятор</a>
            <a href="#builds" className="hover:text-primary transition-colors">Сборки</a>
            <a href="#process" className="hover:text-primary transition-colors">Процесс</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
            <a href="#team" className="hover:text-primary transition-colors">Команда</a>
          </div>
          <Button className="bg-primary hover:bg-primary/90 glow-cyan">
            <Icon name="MessageCircle" className="mr-2" size={18} />
            Заказать
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-block mb-6">
            <Badge className="text-lg px-6 py-2 gradient-racing">Собираем мощь вашей победы</Badge>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Собираем ПК<br />
            <span className="gradient-racing bg-clip-text text-transparent">быстрее скорости света</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Молодая команда профи. Индивидуальный подход. Полная гарантия. 
            Каждая деталь подобрана для максимальной производительности.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 glow-cyan">
              <Icon name="Zap" className="mr-2" size={24} />
              Собрать мой ПК
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2">
              <Icon name="PlayCircle" className="mr-2" size={24} />
              Смотреть процесс
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mt-16">
            <div className="text-center">
              <div className="text-4xl font-black text-primary mb-2">200+</div>
              <div className="text-muted-foreground">Сборок</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-secondary mb-2">100%</div>
              <div className="text-muted-foreground">Гарантия</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-accent mb-2">24/7</div>
              <div className="text-muted-foreground">Поддержка</div>
            </div>
          </div>
        </div>
      </section>

      <section id="calculator" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="gradient-racing bg-clip-text text-transparent">Калькулятор</span> конфигураций
            </h2>
            <p className="text-xl text-muted-foreground">Подберите идеальный ПК за 30 секунд</p>
          </div>

          <Card className="border-2 border-primary/20 glow-cyan">
            <CardHeader>
              <CardTitle className="text-2xl">Настройте параметры</CardTitle>
              <CardDescription>Выберите бюджет и назначение компьютера</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <div className="flex justify-between mb-4">
                  <label className="text-lg font-semibold">Ваш бюджет</label>
                  <span className="text-2xl font-black gradient-racing bg-clip-text text-transparent">
                    {budget[0].toLocaleString('ru-RU')} ₽
                  </span>
                </div>
                <Slider
                  value={budget}
                  onValueChange={setBudget}
                  min={30000}
                  max={150000}
                  step={10000}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-muted-foreground mt-2">
                  <span>30 000 ₽</span>
                  <span>150 000 ₽</span>
                </div>
              </div>

              <div>
                <label className="text-lg font-semibold mb-4 block">Назначение</label>
                <Tabs value={purpose} onValueChange={setPurpose} className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="gaming" className="text-base">
                      <Icon name="Gamepad2" className="mr-2" size={18} />
                      Игры
                    </TabsTrigger>
                    <TabsTrigger value="work" className="text-base">
                      <Icon name="Briefcase" className="mr-2" size={18} />
                      Работа
                    </TabsTrigger>
                    <TabsTrigger value="creative" className="text-base">
                      <Icon name="Palette" className="mr-2" size={18} />
                      Творчество
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              <div className="p-6 rounded-lg bg-primary/10 border-2 border-primary glow-cyan">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Icon name="CheckCircle2" className="text-primary" size={28} />
                  Рекомендуем: {recommended.name}
                </h3>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Icon name="Cpu" className="text-primary" size={20} />
                    <span className="font-semibold">CPU:</span> {recommended.cpu}
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Boxes" className="text-secondary" size={20} />
                    <span className="font-semibold">GPU:</span> {recommended.gpu}
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="MemoryStick" className="text-accent" size={20} />
                    <span className="font-semibold">RAM:</span> {recommended.ram}
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="HardDrive" className="text-primary" size={20} />
                    <span className="font-semibold">SSD:</span> {recommended.storage}
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-primary/20">
                  <span className="text-3xl font-black gradient-racing bg-clip-text text-transparent">
                    {recommended.price.toLocaleString('ru-RU')} ₽
                  </span>
                  <Button size="lg" className="bg-primary hover:bg-primary/90 glow-cyan">
                    <Icon name="ShoppingCart" className="mr-2" size={20} />
                    Заказать сборку
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="builds" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Готовые <span className="gradient-racing bg-clip-text text-transparent">сборки</span>
            </h2>
            <p className="text-xl text-muted-foreground">Проверенные конфигурации, готовые к работе</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {readyBuilds.map((build, idx) => (
              <Card key={idx} className="border-2 hover:border-primary transition-all hover:glow-cyan cursor-pointer group">
                <CardHeader>
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">{build.image}</div>
                  <Badge className="w-fit mb-2">{build.category}</Badge>
                  <CardTitle className="text-xl">{build.name}</CardTitle>
                  <CardDescription className="text-base">{build.specs}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-black gradient-racing bg-clip-text text-transparent mb-4">
                    {build.price.toLocaleString('ru-RU')} ₽
                  </div>
                  <Button className="w-full" variant="outline">
                    <Icon name="Info" className="mr-2" size={18} />
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Процесс <span className="gradient-racing bg-clip-text text-transparent">сборки</span>
            </h2>
            <p className="text-xl text-muted-foreground">От консультации до доставки — всё под контролем</p>
          </div>

          <div className="space-y-6">
            {[
              { icon: 'MessageSquare', title: 'Консультация', desc: 'Обсуждаем задачи и бюджет. Подбираем компоненты.' },
              { icon: 'ShoppingBag', title: 'Закупка', desc: 'Заказываем детали у проверенных поставщиков с гарантией.' },
              { icon: 'Wrench', title: 'Сборка', desc: 'Профессиональная сборка с фото/видео отчетом.' },
              { icon: 'Zap', title: 'Тестирование', desc: 'Стресс-тесты, бенчмарки, проверка стабильности.' },
              { icon: 'Truck', title: 'Доставка', desc: 'Упаковка и доставка. Настройка на месте.' },
              { icon: 'Shield', title: 'Гарантия', desc: 'Полная поддержка и помощь после покупки 24/7.' },
            ].map((step, idx) => (
              <Card key={idx} className="border-2 hover:border-primary transition-all hover:glow-cyan">
                <CardContent className="flex items-center gap-6 p-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center glow-cyan">
                    <Icon name={step.icon as any} className="text-primary" size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{step.title}</h3>
                    <p className="text-muted-foreground">{step.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Портфолио <span className="gradient-racing bg-clip-text text-transparent">наших сборок</span>
            </h2>
            <p className="text-xl text-muted-foreground">Каждая сборка — произведение искусства</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {portfolio.map((item, idx) => (
              <Card key={idx} className="border-2 hover:border-secondary transition-all hover:glow-purple cursor-pointer overflow-hidden group">
                <div className="h-48 bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center text-8xl group-hover:scale-110 transition-transform">
                  {item.emoji}
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{item.title}</CardTitle>
                  <CardDescription className="text-base">{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Команда <span className="gradient-racing bg-clip-text text-transparent">мечты</span>
            </h2>
            <p className="text-xl text-muted-foreground">Два энтузиаста, которые живут своим делом</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-primary glow-cyan">
              <CardHeader className="text-center">
                <div className="text-7xl mb-4">👨‍💻</div>
                <CardTitle className="text-2xl">Технический гений</CardTitle>
                <CardDescription className="text-base">Мастер сборки и железа</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  15 лет. Знает каждую деталь. Собирает быстро и идеально. 
                  Тестирует всё до предела.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary glow-purple">
              <CardHeader className="text-center">
                <div className="text-7xl mb-4">🤝</div>
                <CardTitle className="text-2xl">Профи общения</CardTitle>
                <CardDescription className="text-base">Ваш личный консультант</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  15 лет. Понимает ваши задачи. Подбирает лучшее решение. 
                  Всегда на связи.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="p-12 rounded-2xl gradient-racing">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
              Готовы собрать свою мощь?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Бесплатная консультация. Индивидуальный подбор. Полная гарантия.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                <Icon name="MessageCircle" className="mr-2" size={24} />
                Написать в Telegram
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-white text-white hover:bg-white hover:text-primary">
                <Icon name="Phone" className="mr-2" size={24} />
                Позвонить
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="text-3xl">⚡</div>
              <span className="text-2xl font-bold gradient-racing bg-clip-text text-transparent">ByteBuild</span>
            </div>
            <div className="text-muted-foreground">
              © 2024 ByteBuild. Собираем мощь вашей победы.
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="Instagram" size={24} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Youtube" size={24} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Send" size={24} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;