# GitHub'a Push Etme Adımları

Repository'niz hazır! Şimdi projeyi GitHub'a push edebilirsiniz.

## Hızlı Başlangıç

```bash
cd my-ui-library

# Git repository'sini başlat
git init

# Tüm dosyaları ekle
git add .

# İlk commit'i yap
git commit -m "Initial commit: NeoComponent library with Calendar component"

# GitHub repository'nizi remote olarak ekle
git remote add origin https://github.com/emreklc9/neocomponent.git

# Main branch'e push et
git branch -M main
git push -u origin main
```

## Eğer Git Zaten Başlatılmışsa

```bash
# Remote'u kontrol et
git remote -v

# Eğer farklı bir remote varsa, güncelle
git remote set-url origin https://github.com/emreklc9/neocomponent.git

# Veya yeni remote ekle
git remote add origin https://github.com/emreklc9/neocomponent.git

# Dosyaları ekle ve commit et
git add .
git commit -m "Initial commit: NeoComponent library"

# Push et
git push -u origin main
```

## Sonraki Adımlar

1. ✅ GitHub'da repository'nizi kontrol edin
2. ✅ README.md dosyasının düzgün göründüğünü kontrol edin
3. ✅ NPM'e publish etmek için `GITHUB_SETUP.md` dosyasına bakın

## Önemli Notlar

- `.gitignore` dosyası `node_modules` ve `dist` klasörlerini zaten hariç tutuyor
- İlk push'tan sonra GitHub Actions workflow'ları otomatik olarak çalışacak
- NPM'e publish etmeden önce `package.json`'daki `name` alanının benzersiz olduğundan emin olun

