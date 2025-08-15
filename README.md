Used this command to scrape hmg-kt
```
wget \
  --mirror \
  --convert-links \
  --adjust-extension \
  --page-requisites \
  --no-parent \
  -P ./static-export \
  http://localhost:3000/
```

Then removed the forms