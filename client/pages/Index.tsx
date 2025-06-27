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
            Start with Bot
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
              Lightning Fast VPN
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Your Privacy,
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {" "}
                Protected
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Get instant access to premium VPN servers worldwide through our
              Telegram bot. Secure, fast, and incredibly easy to use.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Get VPN Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 border-primary/20 hover:bg-primary/10"
              >
                View Plans
              </Button>
            </div>
            <div className="mt-12 flex items-center justify-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-primary mr-2" />
                No logs policy
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-primary mr-2" />
                50+ countries
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-primary mr-2" />
                24/7 support
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
              Why Choose Our VPN?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the ultimate combination of security, speed, and
              simplicity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card border-border/50 hover:border-primary/20 transition-colors">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Military-Grade Security
                </h3>
                <p className="text-muted-foreground">
                  AES-256 encryption and zero-logs policy ensures your data
                  stays private
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50 hover:border-primary/20 transition-colors">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
                <p className="text-muted-foreground">
                  Optimized servers deliver blazing-fast speeds without
                  compromising security
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50 hover:border-primary/20 transition-colors">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Global Access</h3>
                <p className="text-muted-foreground">
                  50+ server locations worldwide to access content from anywhere
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50 hover:border-primary/20 transition-colors">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Telegram Integration
                </h3>
                <p className="text-muted-foreground">
                  Manage your VPN directly through our user-friendly Telegram
                  bot
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50 hover:border-primary/20 transition-colors">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Server className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Premium Servers</h3>
                <p className="text-muted-foreground">
                  High-performance servers with unlimited bandwidth and 99.9%
                  uptime
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50 hover:border-primary/20 transition-colors">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Multi-Device</h3>
                <p className="text-muted-foreground">
                  Protect up to 5 devices simultaneously with one subscription
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
              Get Started in 3 Simple Steps
            </h2>
            <p className="text-xl text-muted-foreground">
              Setting up your VPN has never been easier
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary-foreground">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Start the Bot</h3>
              <p className="text-muted-foreground">
                Click the button to open our Telegram bot and get started
                instantly
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary-foreground">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Choose Your Plan</h3>
              <p className="text-muted-foreground">
                Select from our flexible pricing options that suit your needs
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary-foreground">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Connect & Enjoy</h3>
              <p className="text-muted-foreground">
                Get your VPN credentials and start browsing securely right away
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Start with Telegram Bot
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose the plan that works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-card border-border/50">
              <CardContent className="p-6">
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2">Basic</h3>
                  <div className="text-3xl font-bold mb-4">
                    $4.99
                    <span className="text-lg text-muted-foreground">
                      /month
                    </span>
                  </div>
                  <ul className="space-y-3 mb-6 text-left">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-3" />1
                      Device
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-3" />
                      20+ Server Locations
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-3" />
                      Standard Speed
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-3" />
                      24/7 Support
                    </li>
                  </ul>
                  <Button className="w-full" variant="outline">
                    Get Started
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/50 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground">
                  Most Popular
                </Badge>
              </div>
              <CardContent className="p-6">
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2">Pro</h3>
                  <div className="text-3xl font-bold mb-4">
                    $8.99
                    <span className="text-lg text-muted-foreground">
                      /month
                    </span>
                  </div>
                  <ul className="space-y-3 mb-6 text-left">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-3" />3
                      Devices
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-3" />
                      50+ Server Locations
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-3" />
                      High Speed
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-3" />
                      Priority Support
                    </li>
                  </ul>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Get Started
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50">
              <CardContent className="p-6">
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2">Premium</h3>
                  <div className="text-3xl font-bold mb-4">
                    $12.99
                    <span className="text-lg text-muted-foreground">
                      /month
                    </span>
                  </div>
                  <ul className="space-y-3 mb-6 text-left">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-3" />5
                      Devices
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-3" />
                      All Server Locations
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-3" />
                      Ultra High Speed
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-3" />
                      VIP Support
                    </li>
                  </ul>
                  <Button className="w-full" variant="outline">
                    Get Started
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
              Trusted by Thousands
            </h2>
            <p className="text-xl text-muted-foreground">
              Join the community of users who trust us with their privacy
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <p className="text-muted-foreground">Countries</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">10K+</div>
              <p className="text-muted-foreground">Happy Users</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
              <p className="text-muted-foreground">Uptime</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <p className="text-muted-foreground">Support</p>
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
                  "Fast, reliable, and incredibly easy to use through Telegram.
                  Best VPN service I've tried!"
                </p>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary font-semibold">JD</span>
                  </div>
                  <span className="font-medium">John Doe</span>
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
                  "The Telegram bot makes it so convenient. Great speeds and
                  excellent customer support."
                </p>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary font-semibold">MS</span>
                  </div>
                  <span className="font-medium">Maria Silva</span>
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
                  "Perfect for accessing content worldwide. The setup was
                  incredibly simple and fast."
                </p>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary font-semibold">AK</span>
                  </div>
                  <span className="font-medium">Alex Kim</span>
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
            Ready to Secure Your Internet?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start using our VPN service today and experience the internet
            without limits or fears
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Get VPN via Telegram Bot
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
                Your privacy is our priority. Secure, fast, and reliable VPN
                service.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Features</li>
                <li>Pricing</li>
                <li>Server Locations</li>
                <li>Apps</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Setup Guides</li>
                <li>Status</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>About</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Blog</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border/40 mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 SecureVPN. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
