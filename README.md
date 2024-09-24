# Car Rental Project(Next.js and TypeScript and Stripe and MongoDB)
# kütüphaneler
- next
- tailwind
- stripe
- mongoose
- millify
- react
- react-dom

## Backendi projenize dahil ederken

1. stripe ve mongoose paketlerini indirin
2. env dosyaı oluşturun ve gerekli değişkenleri tanımlayın
3. api klasörünü projeye src klasörü içerisine kopyalayın

# next.config.mjs dosyasında resimlerin sayfaya yüklenebilmesi için resmin geleceği url buraya tanıtılmalı

# // proje geliştirme sürecinde farklı portlarda veya yanlandıktan sonra farklı domain adresinde çalışabileceğinden istek altılan api adresini dinamik yapalım
const host = headers().get("host");
const protocol = headers().get("x-forwarded-proto");
const baseUrl = `${protocol}://${host}`;# CarRentalWithNextjs
