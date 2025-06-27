import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Globe,
  Zap,
  Lock,
  MessageCircle,
  Server,
  Users,
  CheckCircle,
  Star,
  ArrowRight,
  Smartphone,
  Laptop,
  Wifi,
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">SecureVPN</span>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <MessageCircle className="w-4 h-4 mr-2" />
            Начать с бота
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              <Zap className="w-3 h-3 mr-1" />
              Молниеносный VPN
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Ваша приватность
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {" "}
                защищена
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Получите мгновенный доступ к премиум VPN серверам по всему миру
              через наш Telegram бот. Безопасно, быстро и невероятно просто в
              использовании.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Получить VPN сейчас
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 border-primary/20 hover:bg-primary/10"
              >
                Смотреть тарифы
              </Button>
            </div>
            <div className="mt-12 flex items-center justify-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-primary mr-2" />
                Политика без логов
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-primary mr-2" />
                50+ стран
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-primary mr-2" />
                Поддержка 24/7
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 border-t border-border/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Почему выбрать наш VPN?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ощутите идеальное сочетание безопасности, скорости и простоты
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card border-border/50 hover:border-primary/20 transition-colors">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Военная безопасность
                </h3>
                <p className="text-muted-foreground">
                  Шифрование AES-256 и политика нулевого логирования гарантируют
                  конфиденциальность ваших данных
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50 hover:border-primary/20 transition-colors">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Молниеносная скорость
                </h3>
                <p className="text-muted-foreground">
                  Оптимизированные серверы обеспечивают невероятную скорость без
                  ущерба для безопасности
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50 hover:border-primary/20 transition-colors">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Глобальный доступ
                </h3>
                <p className="text-muted-foreground">
                  50+ серверов по всему миру для доступа к контенту из любой
                  точки
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50 hover:border-primary/20 transition-colors">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Интеграция с Telegram
                </h3>
                <p className="text-muted-foreground">
                  Управляйте своим VPN напрямую через наш удобный Telegram бот
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50 hover:border-primary/20 transition-colors">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Server className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Премиум сер��еры</h3>
                <p className="text-muted-foreground">
                  Высокопроизводительные серверы с безлимитным трафиком и 99.9%
                  аптайма
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50 hover:border-primary/20 transition-colors">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Мульти-устройства
                </h3>
                <p className="text-muted-foreground">
                  Защитите до 5 устройств одновременно с одной подпиской
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Начните работу в 3 простых шага
            </h2>
            <p className="text-xl text-muted-foreground">
              Настройка VPN никогда не была такой простой
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary-foreground">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Запустите бота</h3>
              <p className="text-muted-foreground">
                Нажмите кнопку, чтобы открыть наш Telegram бот и начать работу
                мгновенно
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary-foreground">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Выберите тариф</h3>
              <p className="text-muted-foreground">
                Выберите из наших гибких тарифных планов тот, который подходит
                именно вам
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary-foreground">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Подключайтесь и наслаждайтесь
              </h3>
              <p className="text-muted-foreground">
                Получите ваши VPN данные и начните безопасный интернет-серфинг
                прямо сейчас
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Начать с Telegram бота
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Простые, прозрачные цены
            </h2>
            <p className="text-xl text-muted-foreground">
              Выберите тариф, который лучше всего подходит для вас
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-card border-border/50">
              <CardContent className="p-6">
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2">Базовый</h3>
                  <div className="text-3xl font-bold mb-4">
                    $4.99
                    <span className="text-lg text-muted-foreground">
                      /месяц
                    </span>
                  </div>
                  <ul className="space-y-3 mb-6 text-left">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-3" />1
                      устройство
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-3" />
                      20+ серверов
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-3" />
                      Стандартная скорость
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-3" />
                      Поддержка 24/7
                    </li>
                  </ul>
                  <Button className="w-full" variant="outline">
                    Начать
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/50 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground">
                  Самый популярный
                </Badge>
              </div>
              <CardContent className="p-6">
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2">Про</h3>
                  <div className="text-3xl font-bold mb-4">
                    $8.99
                    <span className="text-lg text-muted-foreground">
                      /месяц
                    </span>
                  </div>
                  <ul className="space-y-3 mb-6 text-left">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-3" />3
                      устройства
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-3" />
                      50+ серверов
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-3" />
                      Высокая скорость
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-3" />
                      Приоритетная поддержка
                    </li>
                  </ul>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Начать
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50">
              <CardContent className="p-6">
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2">Премиум</h3>
                  <div className="text-3xl font-bold mb-4">
                    $12.99
                    <span className="text-lg text-muted-foreground">
                      /месяц
                    </span>
                  </div>
                  <ul className="space-y-3 mb-6 text-left">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-3" />5
                      устройств
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-3" />
                      Все серверы
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-3" />
                      Ультра высокая скорость
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-3" />
                      VIP поддержка
                    </li>
                  </ul>
                  <Button className="w-full" variant="outline">
                    Начать
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Нам доверяют тысячи
            </h2>
            <p className="text-xl text-muted-foreground">
              Присоединяйтесь к сообществу пользователей, которые доверяют нам
              свою приватность
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <p className="text-muted-foreground">Стран</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">10K+</div>
              <p className="text-muted-foreground">Довольных пользователей</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
              <p className="text-muted-foreground">Аптайм</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <p className="text-muted-foreground">Поддержка</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-card border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Быстро, надежно и невероятно просто в использовании через
                  Telegram. Лучший VPN сервис, который я пробовал!"
                </p>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary font-semibold">ИД</span>
                  </div>
                  <span className="font-medium">Иван Дмитриев</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Telegram бот делает всё очень удобным. Отличная скорость и
                  превосходная поддержка клиентов."
                </p>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary font-semibold">МС</span>
                  </div>
                  <span className="font-medium">Мария Сидорова</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Идеально для доступа к контенту по всему миру. Настройка была
                  невероятно простой и быстрой."
                </p>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary font-semibold">АК</span>
                  </div>
                  <span className="font-medium">Алексей Козлов</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Готовы защитить свой интернет?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Начните использовать наш VPN сервис сегодня и ощутите интернет без
            ограничений и страхов
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Получить VPN через Telegram бота
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold">SecureVPN</span>
              </div>
              <p className="text-muted-foreground">
                Ваша приватность - наш приоритет. Безопасный, быстрый и надежный
                VPN сервис.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Продукт</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Возможности</li>
                <li>Цены</li>
                <li>Расположение серверов</li>
                <li>Приложения</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Поддержка</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Центр помощи</li>
                <li>Связаться с нами</li>
                <li>Руководства по настройке</li>
                <li>Статус</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>О нас</li>
                <li>Политика конфиденциальности</li>
                <li>Условия обслуживания</li>
                <li>Блог</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border/40 mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 SecureVPN. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
