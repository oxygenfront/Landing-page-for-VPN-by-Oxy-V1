import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
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
  Clock,
  Infinity,
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-14 sm:h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
            <span className="text-lg sm:text-xl font-bold">SecureVPN</span>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-2">
            <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            <span className="hidden xs:inline">Начать с бота</span>
            <span className="xs:hidden">Начать</span>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
                <Zap className="w-3 h-3 mr-1" />
                Молниеносный VPN
              </Badge>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-4 sm:mb-6"
            >
              <span className="block sm:inline">Ваша приватность</span>
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent block sm:inline">
                {" "}
                защищена
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0"
            >
              Получите мгновенный доступ к премиум VPN серверам по всему миру
              через наш Telegram бот. Безопасно, быстро и невероятно просто в
              использовании.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-6 w-full sm:w-auto"
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                  <span className="hidden sm:inline">Получить VPN сейчас</span>
                  <span className="sm:hidden">Получить VPN</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-1 sm:ml-2" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-6 border-primary/20 hover:bg-primary/10 w-full sm:w-auto"
                >
                  Смотреть тарифы
                </Button>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-muted-foreground px-4"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="flex items-center"
              >
                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-primary mr-1 sm:mr-2" />
                Политика без логов
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1 }}
                className="flex items-center"
              >
                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-primary mr-1 sm:mr-2" />
                50+ стран
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
                className="flex items-center"
              >
                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-primary mr-1 sm:mr-2" />
                Поддержка 24/7
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-20 border-t border-border/40">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Почему выбрать наш VPN?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
              Ощутите идеальное сочетание безопасности, скорости и простоты
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="bg-card border-border/50 hover:border-primary/20 transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  >
                    <Shield className="w-6 h-6 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2">
                    Военная безопасность
                  </h3>
                  <p className="text-muted-foreground">
                    Шифрование AES-256 и политика нулевого логирования
                    гарантируют конфиденциальность ваших данных
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="bg-card border-border/50 hover:border-primary/20 transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  >
                    <Zap className="w-6 h-6 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2">
                    Скорость до 1 Гбит/с
                  </h3>
                  <p className="text-muted-foreground">
                    Оптимизированные серверы обеспечивают максимальную скорость
                    до 1 Гбит/с без ущерба для безопасности
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="bg-card border-border/50 hover:border-primary/20 transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  >
                    <Infinity className="w-6 h-6 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2">
                    Безлимитный трафик
                  </h3>
                  <p className="text-muted-foreground">
                    Никаких ограничений по трафику - пользуйтесь VPN сколько
                    угодно без дополнительных платежей
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="bg-card border-border/50 hover:border-primary/20 transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  >
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2">
                    Интеграция с Telegram
                  </h3>
                  <p className="text-muted-foreground">
                    Управляйте своим VPN напрямую через наш удобный Telegram бот
                    без установки дополнительных приложений
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="bg-card border-border/50 hover:border-primary/20 transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    viewport={{ once: true }}
                    className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  >
                    <Globe className="w-6 h-6 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2">50+ стран</h3>
                  <p className="text-muted-foreground">
                    Серверы в 50+ странах мира для доступа к любому контенту и
                    обхода географических блокировок
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="bg-card border-border/50 hover:border-primary/20 transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  >
                    <Users className="w-6 h-6 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2">
                    Безлимитные пользователи
                  </h3>
                  <p className="text-muted-foreground">
                    Подключайте неограниченное количество пользователей к одному
                    токену - идеально для семьи или компании
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Начните работу в 3 простых шага
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-4 sm:px-0">
              Настройка VPN никогда не была такой простой
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center px-4 sm:px-0">
              <div className="bg-primary w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl sm:text-2xl font-bold text-primary-foreground">
                1
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                Запустите бота
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Нажмите кнопку, чтобы открыть наш Telegram бот и начать работу
                мгновенно
              </p>
            </div>

            <div className="text-center px-4 sm:px-0">
              <div className="bg-primary w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl sm:text-2xl font-bold text-primary-foreground">
                2
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                Выберите тариф
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Выберите из наших гибких тарифных планов тот, который подходит
                именно вам
              </p>
            </div>

            <div className="text-center px-4 sm:px-0">
              <div className="bg-primary w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl sm:text-2xl font-bold text-primary-foreground">
                3
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                Подключайтесь и наслаждайтесь
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
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
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Единый тариф, максимум возможностей
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-4 sm:px-0">
              Один тариф со всеми возможностями - выберите удобный период
              подписки
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {/* Features highlight */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/5 rounded-2xl p-6 sm:p-8 mb-8 sm:mb-12 border border-primary/20"
            >
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">
                  Что входит в тариф
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Все возможности включены в единый тариф
                </p>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-primary/10 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Infinity className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <h4 className="text-sm sm:text-base font-semibold mb-1">
                    Безлимитный трафик
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Без ограничений
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-primary/10 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <h4 className="text-sm sm:text-base font-semibold mb-1">
                    До 1 Гбит/с
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Максимальная скорость
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-primary/10 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <h4 className="text-sm sm:text-base font-semibold mb-1">
                    ∞ пользователей
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    На одном токене
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-primary/10 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <h4 className="text-sm sm:text-base font-semibold mb-1">
                    50+ стран
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Серверы по всему миру
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Pricing options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="bg-card border-border/50 hover:border-primary/30 transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">1 месяц</h3>
                    <div className="text-2xl font-bold mb-4">
                      $9.99
                      <span className="text-sm text-muted-foreground block">
                        за весь период
                      </span>
                    </div>
                    <Button className="w-full" variant="outline">
                      Выбрать
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="bg-card border-border/50 hover:border-primary/30 transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">3 месяца</h3>
                    <div className="text-2xl font-bold mb-4">
                      $24.99
                      <span className="text-sm text-muted-foreground block">
                        $8.33/мес
                      </span>
                    </div>
                    <Badge className="mb-4 bg-green-500/10 text-green-400 border-green-500/20">
                      Экономия 17%
                    </Badge>
                    <Button className="w-full" variant="outline">
                      Выбрать
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="bg-card border-primary/50 hover:border-primary/70 transition-all duration-300 h-full relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">
                      Популярный
                    </Badge>
                  </div>
                  <CardContent className="p-6 text-center">
                    <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">6 месяцев</h3>
                    <div className="text-2xl font-bold mb-4">
                      $44.99
                      <span className="text-sm text-muted-foreground block">
                        $7.50/мес
                      </span>
                    </div>
                    <Badge className="mb-4 bg-green-500/10 text-green-400 border-green-500/20">
                      Экономия 25%
                    </Badge>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      Выбрать
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="bg-card border-border/50 hover:border-primary/30 transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">12 месяцев</h3>
                    <div className="text-2xl font-bold mb-4">
                      $79.99
                      <span className="text-sm text-muted-foreground block">
                        $6.67/мес
                      </span>
                    </div>
                    <Badge className="mb-4 bg-green-500/10 text-green-400 border-green-500/20">
                      Экономия 33%
                    </Badge>
                    <Button className="w-full" variant="outline">
                      Выбрать
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-4 sm:px-0">
              Качественный сервис с прозрачными характеристиками
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-primary mb-2"
              >
                50+
              </motion.div>
              <p className="text-muted-foreground">Стран</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-primary mb-2"
              >
                1 Гбит/с
              </motion.div>
              <p className="text-muted-foreground">Максимальная скорость</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-primary mb-2"
              >
                99.9%
              </motion.div>
              <p className="text-muted-foreground">Аптайм</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-primary mb-2"
              >
                24/7
              </motion.div>
              <p className="text-muted-foreground">Поддержка</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
              <CardContent className="p-8 text-center">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">
                  Гарантия качества
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Мы предоставляем стабильный VPN сервис с высокой скоростью и
                  надежной защитой. Наш опыт и внимание к деталям гарантируют
                  качественное обслуживание каждого клиента.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Готовы защитить свой интернет?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-4 sm:px-0">
            Начните использовать наш VPN сервис сегодня и ощутите интернет без
            ограничений и страхов
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-6"
          >
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
            <span className="hidden sm:inline">
              Получить VPN через Telegram бота
            </span>
            <span className="sm:hidden">Получить VPN</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-1 sm:ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
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
                <li>Политика конфиденц��альности</li>
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
