# NeoComponent 📦

Modern React UI kütüphanesi - Takvim ve diğer bileşenler için hazırlanmış bir component library.

[![npm version](https://img.shields.io/npm/v/neo-component.svg)](https://www.npmjs.com/package/neo-component)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ Özellikler

- 📅 **Takvim Bileşeni**: Modern ve kullanıcı dostu takvim komponenti
- 🎨 **Modern Tasarım**: Temiz ve modern UI/UX
- 📱 **Responsive**: Mobil ve masaüstü uyumlu
- 🔧 **TypeScript**: Tam TypeScript desteği
- ⚡ **Performanslı**: Optimize edilmiş React bileşenleri
- 🌍 **Türkçe Destek**: Türkçe ay ve gün isimleri

## 📦 Kurulum

```bash
npm install neo-component
# veya
yarn add neo-component
# veya
pnpm add neo-component
```

## 🚀 Kullanım

### Takvim Bileşeni

```tsx
import React, { useState } from 'react';
import { Calendar } from 'neo-component';
import 'neo-component/dist/style.css'; // CSS'i import etmeyi unutmayın!

function App() {
  const [selectedDate, setSelectedDate] = useState<Date>();

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    console.log('Seçilen tarih:', date);
  };

  return (
    <Calendar
      selectedDate={selectedDate}
      onDateSelect={handleDateSelect}
      weekStartsOn={1} // 1 = Pazartesi, 0 = Pazar
    />
  );
}
```

### Takvim Props

| Prop | Tip | Varsayılan | Açıklama |
|------|-----|------------|----------|
| `selectedDate` | `Date?` | `undefined` | Seçili tarih |
| `onDateSelect` | `(date: Date) => void` | `undefined` | Tarih seçildiğinde çağrılır |
| `minDate` | `Date?` | `undefined` | Minimum seçilebilir tarih |
| `maxDate` | `Date?` | `undefined` | Maximum seçilebilir tarih |
| `view` | `'month' \| 'week' \| 'day'` | `'month'` | Takvim görünümü |
| `weekStartsOn` | `0 \| 1` | `1` | Hafta başlangıcı (0=Pazar, 1=Pazartesi) |
| `className` | `string` | `''` | Özel CSS sınıfı |

## 📚 API Dokümantasyonu

### Calendar Props

| Prop | Tip | Varsayılan | Açıklama |
|------|-----|------------|----------|
| `selectedDate` | `Date?` | `undefined` | Seçili tarih |
| `onDateSelect` | `(date: Date) => void` | `undefined` | Tarih seçildiğinde çağrılır |
| `minDate` | `Date?` | `undefined` | Minimum seçilebilir tarih |
| `maxDate` | `Date?` | `undefined` | Maximum seçilebilir tarih |
| `view` | `'month' \| 'week' \| 'day'` | `'month'` | Takvim görünümü |
| `weekStartsOn` | `0 \| 1` | `1` | Hafta başlangıcı (0=Pazar, 1=Pazartesi) |
| `className` | `string` | `''` | Özel CSS sınıfı |

## 🛠️ Geliştirme

Bu kütüphaneyi geliştirmek için:

```bash
# Repository'yi klonlayın
git clone https://github.com/emreklc9/neocomponent.git
cd neocomponent

# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev

# Kütüphaneyi build edin
npm run build

# Lint kontrolü yapın
npm run lint
```

## 📝 Katkıda Bulunma

Katkılarınızı bekliyoruz! Lütfen:

1. Bu repository'yi fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add some amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 🔗 Bağlantılar

- [GitHub Repository](https://github.com/emreklc9/neocomponent)
- [Issue Tracker](https://github.com/emreklc9/neocomponent/issues)
- [NPM Package](https://www.npmjs.com/package/neo-component)
