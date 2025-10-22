import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import ImageCompareSlider from '@/components/ImageCompareSlider';

export default function Index() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{before: string, after: string, effect: string} | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processedImage, setProcessedImage] = useState<string | null>(null);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleProcess = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setProcessedImage('https://v3b.fal.media/files/b/penguin/94mAzWgHbJXlzKrlpVGXn_output.png');
      setIsProcessing(false);
      setIsModalOpen(true);
    }, 2000);
  };

  const openImageModal = (item: {before: string, after: string, effect: string}) => {
    setSelectedImage(item);
    setIsModalOpen(true);
  };

  const features = [
    {
      icon: 'Sparkles',
      title: 'AI Анимация',
      description: 'Оживляйте портреты с реалистичными движениями и мимикой',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      icon: 'Wand2',
      title: 'Улучшение качества',
      description: 'Повышайте разрешение до 4K с помощью нейросетей',
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      icon: 'Palette',
      title: 'Цветокоррекция',
      description: 'Автоматическая балансировка цвета и контраста',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      icon: 'Zap',
      title: 'Быстрая обработка',
      description: 'Результат за считанные секунды',
      gradient: 'from-amber-500 to-orange-500'
    }
  ];

  const pricingPlans = [
    {
      name: 'Базовый',
      price: '0',
      period: 'бесплатно',
      features: ['5 фото в месяц', 'Базовое улучшение', 'HD качество'],
      popular: false
    },
    {
      name: 'Профи',
      price: '990',
      period: 'в месяц',
      features: ['50 фото в месяц', 'AI анимация', '4K качество', 'Приоритетная обработка'],
      popular: true
    },
    {
      name: 'Безлимит',
      price: '2990',
      period: 'в месяц',
      features: ['Безлимитно фото', 'Все функции', '8K качество', 'API доступ'],
      popular: false
    }
  ];

  const galleryItems = [
    { before: 'https://v3b.fal.media/files/b/penguin/94mAzWgHbJXlzKrlpVGXn_output.png', after: 'https://v3b.fal.media/files/b/penguin/94mAzWgHbJXlzKrlpVGXn_output.png', effect: 'Анимация' },
    { before: 'https://v3b.fal.media/files/b/penguin/94mAzWgHbJXlzKrlpVGXn_output.png', after: 'https://v3b.fal.media/files/b/penguin/94mAzWgHbJXlzKrlpVGXn_output.png', effect: '4K Upscale' },
    { before: 'https://v3b.fal.media/files/b/penguin/94mAzWgHbJXlzKrlpVGXn_output.png', after: 'https://v3b.fal.media/files/b/penguin/94mAzWgHbJXlzKrlpVGXn_output.png', effect: 'Цветокоррекция' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-accent/20 to-white">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b z-50 animate-fade-in">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Icon name="Sparkles" className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              PhotoAI
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-foreground/80 hover:text-foreground transition-colors">Главная</a>
            <a href="#gallery" className="text-foreground/80 hover:text-foreground transition-colors">Галерея</a>
            <a href="#upload" className="text-foreground/80 hover:text-foreground transition-colors">Загрузка</a>
            <a href="#pricing" className="text-foreground/80 hover:text-foreground transition-colors">Тарифы</a>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Avatar>
                <AvatarFallback>АИ</AvatarFallback>
              </Avatar>
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center animate-fade-in-up">
          <Badge className="mb-6 bg-gradient-to-r from-primary to-secondary text-white border-0 px-4 py-2 text-sm animate-scale-in">
            ✨ AI-технологии нового поколения
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-fade-in-up">
            Оживите свои<br />фотографии
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Превращайте обычные снимки в живые воспоминания с помощью искусственного интеллекта
          </p>
          <div className="flex gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white text-lg px-8 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              Попробовать бесплатно
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-2xl border-2">
              Посмотреть примеры
              <Icon name="Play" className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-scale-in overflow-hidden group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={feature.icon as any} className="text-white" size={28} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Примеры работ</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Посмотрите, как AI преображает фотографии</p>
          <div className="grid md:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <Card 
                key={index} 
                className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in cursor-pointer" 
                style={{ animationDelay: `${index * 0.15}s` }}
                onClick={() => openImageModal(item)}
              >
                <CardContent className="p-0 relative group">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={item.before} 
                      alt={`Пример ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <Badge className="bg-gradient-to-r from-primary to-secondary text-white border-0 mb-2">
                        {item.effect}
                      </Badge>
                      <p className="text-white text-sm flex items-center gap-2">
                        До и после обработки
                        <Icon name="Maximize2" size={16} />
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="upload" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Загрузите фото</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Перетащите изображение или выберите файл</p>
          <Card 
            className={`border-2 border-dashed transition-all duration-300 ${
              isDragging ? 'border-primary bg-accent/30 scale-105' : 'border-border hover:border-primary/50'
            }`}
            onDrop={handleDrop}
            onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
            onDragLeave={() => setIsDragging(false)}
          >
            <CardContent className="p-12 text-center">
              {selectedFile ? (
                <div className="space-y-4 animate-scale-in">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Icon name="Check" className="text-white" size={40} />
                  </div>
                  <p className="text-lg font-medium">{selectedFile.name}</p>
                  <div className="flex gap-4 justify-center">
                    <Button 
                      className="bg-gradient-to-r from-primary to-secondary text-white"
                      onClick={handleProcess}
                      disabled={isProcessing}
                    >
                      {isProcessing ? (
                        <>
                          Обработка...
                          <Icon name="Loader2" className="ml-2 animate-spin" size={18} />
                        </>
                      ) : (
                        <>
                          Обработать фото
                          <Icon name="Wand2" className="ml-2" size={18} />
                        </>
                      )}
                    </Button>
                    <Button variant="outline" onClick={() => setSelectedFile(null)}>
                      Выбрать другое
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center animate-float">
                    <Icon name="Upload" className="text-primary" size={40} />
                  </div>
                  <p className="text-lg font-medium">Перетащите фото сюда</p>
                  <p className="text-muted-foreground">или</p>
                  <label>
                    <Button asChild className="bg-gradient-to-r from-primary to-secondary text-white cursor-pointer">
                      <span>
                        Выбрать файл
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={handleFileChange}
                        />
                      </span>
                    </Button>
                  </label>
                  <p className="text-sm text-muted-foreground">Поддерживаются JPG, PNG, WEBP до 10MB</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Выберите тариф</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Начните бесплатно, обновите когда будете готовы</p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={index}
                className={`relative border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-fade-in-up ${
                  plan.popular ? 'border-primary shadow-xl scale-105' : 'border-border'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-primary to-secondary text-white border-0 px-6 py-1">
                      Популярный
                    </Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {plan.price}₽
                    </span>
                    <span className="text-muted-foreground ml-2">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={20} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-primary to-secondary text-white' 
                        : 'bg-accent text-accent-foreground hover:bg-accent/80'
                    }`}
                    size="lg"
                  >
                    Выбрать план
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="profile" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Ваш профиль</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="col-span-1 border-0 shadow-lg">
              <CardHeader className="text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white text-2xl">
                    АИ
                  </AvatarFallback>
                </Avatar>
                <CardTitle>Александр Иванов</CardTitle>
                <CardDescription>ai@photoai.com</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-gradient-to-r from-primary to-secondary text-white">
                  Редактировать профиль
                </Button>
              </CardContent>
            </Card>
            <Card className="col-span-2 border-0 shadow-lg">
              <CardHeader>
                <CardTitle>История обработок</CardTitle>
                <CardDescription>Последние загруженные фото</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="flex items-center gap-4 p-3 rounded-xl bg-accent/30 hover:bg-accent/50 transition-colors">
                      <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                        <Icon name="Image" size={28} />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">photo_{item}.jpg</p>
                        <p className="text-sm text-muted-foreground">Обработано 2 часа назад</p>
                      </div>
                      <Button size="sm" variant="ghost">
                        <Icon name="Download" size={18} />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 bg-foreground/5">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Icon name="Sparkles" className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              PhotoAI
            </span>
          </div>
          <p className="text-muted-foreground mb-4">Оживляем фотографии с помощью AI</p>
          <div className="flex justify-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">О нас</a>
            <a href="#" className="hover:text-foreground transition-colors">Блог</a>
            <a href="#" className="hover:text-foreground transition-colors">Поддержка</a>
            <a href="#" className="hover:text-foreground transition-colors">Конфиденциальность</a>
          </div>
        </div>
      </footer>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden">
          <DialogHeader className="p-6 pb-0">
            <DialogTitle className="text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {selectedImage ? selectedImage.effect : 'Результат обработки'}
            </DialogTitle>
          </DialogHeader>
          <div className="p-6">
            <Tabs defaultValue="slider" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="slider" className="gap-2">
                  <Icon name="GitCompare" size={16} />
                  Слайдер сравнения
                </TabsTrigger>
                <TabsTrigger value="sidebyside" className="gap-2">
                  <Icon name="Columns2" size={16} />
                  Рядом
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="slider" className="mt-0">
                <ImageCompareSlider 
                  beforeImage={selectedImage?.before || (selectedFile ? URL.createObjectURL(selectedFile) : '')}
                  afterImage={selectedImage?.after || processedImage || ''}
                />
              </TabsContent>
              
              <TabsContent value="sidebyside" className="mt-0">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-sm">Оригинал</Badge>
                    </div>
                    <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
                      <img 
                        src={selectedImage?.before || (selectedFile ? URL.createObjectURL(selectedFile) : '')}
                        alt="До обработки"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Badge className="bg-gradient-to-r from-primary to-secondary text-white border-0">
                        После обработки
                      </Badge>
                    </div>
                    <div className="aspect-square rounded-2xl overflow-hidden bg-muted relative group">
                      <img 
                        src={selectedImage?.after || processedImage || ''}
                        alt="После обработки"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="mt-6 flex gap-3 justify-end">
              <Button variant="outline" onClick={() => setIsModalOpen(false)}>
                Закрыть
              </Button>
              <Button className="bg-gradient-to-r from-primary to-secondary text-white">
                <Icon name="Download" className="mr-2" size={18} />
                Скачать результат
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}