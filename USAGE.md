# Diğer Projelerde Kullanım

Bu kütüphaneyi başka bir React projenizde kullanmak için birkaç yöntem var:

## Yöntem 1: GitHub'dan Direkt Kurulum (Önerilen - Henüz NPM'e publish etmediyseniz)

```bash
npm install git+https://github.com/emreklc9/neocomponent.git
# veya
npm install github:emreklc9/neocomponent
# veya
yarn add git+https://github.com/emreklc9/neocomponent.git
# veya
pnpm add git+https://github.com/emreklc9/neocomponent.git
```

## Yöntem 2: NPM Link (Geliştirme için)

Eğer kütüphaneyi geliştirirken test etmek istiyorsanız:

```bash
# Kütüphane klasöründe
cd my-ui-library
npm link

# Projenizde
cd ../your-project
npm link neo-component
```

## Yöntem 3: NPM'e Publish Ettikten Sonra

```bash
npm install neo-component
# veya
yarn add neo-component
# veya
pnpm add neo-component
```

## Kullanım Örneği

Kurulumdan sonra projenizde şöyle kullanabilirsiniz:

```tsx
import React, { useState } from 'react';
import { Calendar } from 'neo-component';
import 'neo-component/dist/style.css'; // CSS'i import etmeyi unutmayın!

function App() {
  const [selectedDate, setSelectedDate] = useState<Date>();

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    console.log('Seçilen tarih:', date.toLocaleDateString('tr-TR'));
  };

  return (
    <div>
      <h1>Takvim Örneği</h1>
      <Calendar
        selectedDate={selectedDate}
        onDateSelect={handleDateSelect}
        weekStartsOn={1}
      />
      
      {selectedDate && (
        <p>
          Seçili Tarih: {selectedDate.toLocaleDateString('tr-TR', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </p>
      )}
    </div>
  );
}

export default App;
```

## Önemli Notlar

1. **CSS Import**: CSS dosyasını mutlaka import etmeyi unutmayın!
   ```tsx
   import 'neo-component/dist/style.css';
   ```

2. **TypeScript**: TypeScript kullanıyorsanız, tip tanımlamaları otomatik olarak gelecektir.

3. **React Versiyonu**: React 18 veya 19 kullanmanız gerekiyor.

4. **Build**: Kütüphaneyi kullanmadan önce build edilmiş olması gerekiyor. Eğer GitHub'dan kuruyorsanız, build otomatik olarak yapılır.

## Sorun Giderme

### CSS yüklenmiyor
- CSS import'unu kontrol edin: `import 'neo-component/dist/style.css';`
- Build edilmiş dosyaların olduğundan emin olun (`dist` klasörü)

### Module bulunamıyor hatası
- `node_modules` klasörünü silip tekrar `npm install` yapın
- Package.json'da doğru versiyon olduğundan emin olun

### TypeScript hataları
- `@types/react` ve `@types/react-dom` yüklü olduğundan emin olun
- TypeScript versiyonunuzun 4.5+ olduğundan emin olun
