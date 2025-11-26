# GitHub'a Yayınlama Rehberi

Bu kütüphaneyi GitHub'da yayınlamak ve npm'e publish etmek için aşağıdaki adımları takip edin:

## 1. GitHub Repository Oluşturma

✅ Repository oluşturuldu: https://github.com/emreklc9/neocomponent.git

## 2. Package.json Güncelleme

✅ `package.json` dosyasındaki repository bilgileri güncellendi:

```json
"repository": {
  "type": "git",
  "url": "https://github.com/emreklc9/neocomponent.git"
},
"bugs": {
  "url": "https://github.com/emreklc9/neocomponent/issues"
},
"homepage": "https://github.com/emreklc9/neocomponent#readme"
```

## 3. Git İşlemleri

Şimdi projeyi GitHub'a push edin:

```bash
# Git repository'sini başlatın (eğer henüz yapılmadıysa)
git init

# Tüm dosyaları ekleyin
git add .

# İlk commit'i yapın
git commit -m "Initial commit: NeoComponent library"

# GitHub repository'nizi remote olarak ekleyin
git remote add origin https://github.com/emreklc9/neocomponent.git

# Main branch'e push edin
git branch -M main
git push -u origin main
```

## 4. NPM'e Publish Etme

### NPM Hesabı Oluşturma

1. [npmjs.com](https://www.npmjs.com) adresinden hesap oluşturun
2. Email doğrulaması yapın

### NPM'e Login

```bash
npm login
```

### Package İsmini Kontrol Edin

`package.json` dosyasındaki `name` alanının benzersiz olduğundan emin olun. Eğer `neo-component` zaten alınmışsa, farklı bir isim kullanın (örn: `@kullaniciadi/neo-component`).

### Publish

```bash
# Önce build edin
npm run build

# NPM'e publish edin
npm publish
```

**Not:** İlk publish için `npm publish --access public` kullanmanız gerekebilir (scoped package ise).

## 5. GitHub Actions (Otomatik Publish)

GitHub Actions ile otomatik publish için:

1. GitHub repository'nizde **Settings > Secrets and variables > Actions** bölümüne gidin
2. **New repository secret** butonuna tıklayın
3. Name: `NPM_TOKEN`
4. Value: NPM'den aldığınız access token'ı yapıştırın
   - NPM token oluşturmak için: [npmjs.com/settings/YOUR_USERNAME/tokens](https://www.npmjs.com/settings/YOUR_USERNAME/tokens)
   - **Automation** tipinde token oluşturun

Artık GitHub'da bir release oluşturduğunuzda otomatik olarak npm'e publish edilecektir.

## 6. Version Güncelleme

Yeni bir versiyon yayınlamak için:

```bash
# Patch version (1.0.0 -> 1.0.1)
npm version patch

# Minor version (1.0.0 -> 1.1.0)
npm version minor

# Major version (1.0.0 -> 2.0.0)
npm version major
```

Bu komutlar otomatik olarak:
- `package.json`'daki version'ı günceller
- Git tag oluşturur
- Commit yapar

Sonra:

```bash
git push && git push --tags
```

## 7. GitHub Release Oluşturma

1. GitHub repository'nizde **Releases** bölümüne gidin
2. **Create a new release** butonuna tıklayın
3. Tag'ı seçin (örn: `v1.0.0`)
4. Release title ve description yazın
5. **Publish release** butonuna tıklayın

Bu işlem GitHub Actions workflow'unu tetikleyecek ve otomatik olarak npm'e publish edilecektir.

## Önemli Notlar

- İlk publish'ten önce `package.json`'daki tüm bilgileri kontrol edin
- Repository URL'lerini kendi bilgilerinizle güncelleyin
- NPM token'ınızı güvenli tutun ve asla commit etmeyin
- Her yeni versiyon için changelog tutmayı unutmayın

## Sorun Giderme

### "Package name already exists" hatası
- `package.json`'daki `name` alanını değiştirin
- Scoped package kullanın: `@kullaniciadi/neo-component`

### "You do not have permission" hatası
- NPM hesabınızın doğru olduğundan emin olun: `npm whoami`
- Package isminin size ait olduğundan emin olun

### CSS import sorunu
- Kullanıcıların `import 'neo-component/dist/style.css'` yapması gerektiğini README'de belirtin
- Veya CSS'i JavaScript bundle'ına dahil edin (önerilmez)

