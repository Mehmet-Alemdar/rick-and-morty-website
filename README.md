## Başlarken

Öncelikle, geliştirme sunucusunu çalıştırın:

<CodeBlock language="bash">
{`npm run dev`}
</CodeBlock>

Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın ve sonucu görün.

## Docker ile Çalıştırma

Bu projeyi Docker kullanarak da çalıştırabilirsiniz. Aşağıda, Docker Compose ve Docker komutları ile projeyi nasıl çalıştırabileceğinizi adım adım açıklayan talimatlar bulunmaktadır.

### Docker Compose Kullanarak

1. Proje dizinine gidin:
   <CodeBlock language="bash">
   {`cd rick-and-morty-website`}
   </CodeBlock>

2. Docker Compose hizmetlerini başlatın:
   <CodeBlock language="bash">
   {`docker-compose up`}
   </CodeBlock>

   Bu komut, `docker-compose.yml` dosyasını kullanarak hizmetleri başlatır ve logları terminalde görüntüler.

3. (Opsiyonel) Hizmetleri arka planda çalıştırmak isterseniz:
   <CodeBlock language="bash">
   {`docker-compose up -d`}
   </CodeBlock>
   
4. Hizmetlerin durumunu kontrol etmek için:
   <CodeBlock language="bash">
   {`docker-compose ps`}
   </CodeBlock>

5. Hizmetleri durdurmak için:
   <CodeBlock language="bash">
   {`docker-compose down`}
   </CodeBlock>

### Docker Komutları Kullanarak

1. Proje dizinine gidin:
   <CodeBlock language="bash">
   {`cd rick-and-morty-website`}
   </CodeBlock>

2. Docker image oluşturun:
   <CodeBlock language="bash">
   {`docker build -t rick-and-morty-web .`}
   </CodeBlock>

3. Docker container'ı başlatın:
   <CodeBlock language="bash">
   {`docker run -p 3000:3000 rick-and-morty-web`}
   </CodeBlock>

   Bu komut, `rick-and-morty-web` image'ini kullanarak bir Docker container başlatır ve uygulamanızı [http://localhost:3000](http://localhost:3000) adresinde erişilebilir hale getirir.

4. Çalışan Docker container'larını görmek için:
   <CodeBlock language="bash">
   {`docker ps`}
   </CodeBlock>

5. Docker container'ı durdurmak için:
   <CodeBlock language="bash">
   {`docker stop CONTAINER_ID`}
   </CodeBlock>

   `CONTAINER_ID` yerine durdurmak istediğiniz container'ın kimliğini yazın.
