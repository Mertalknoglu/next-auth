#NextAuth  + Next.js  projesi
Projeyi GitHub’dan çekip yerel veya Docker ortamında nasıl çalıştıracağınızı adım adım aşağıda açıklıyorum.


 1->Depoyu Klonlayın
 2-> .env.prod dosyasını auth0 a giriş yapıp. Ordan aldığınız kendi giriş  bilgileriniz ile doldurun.
 
    örnek içierik aşağıdaki gibidir.

    NEXTAUTH_URL=http://localhost:3000
    NEXTAUTH_SECRET=your_nextauth_secret_here
    AUTH0_CLIENT_ID=your_auth0_client_id
    AUTH0_CLIENT_SECRET=your_auth0_client_secret
    AUTH0_ISSUER=https://your-domain.auth0.com

 3-> terminalde npm install  ve ardından  npm run dev komutunu çalıştırın.

 4->http://localhost:3000 tarayıcıda bu adreste çalışacaktır.

 Docker ile çalıştırma

 1-> .env.prod dosyasını yine kendi üstte belirttigim alanları doldurun.

 2-> "docker-compose up --build -d" komutu ile  docker compose u ayağa kaldırın. 

 3->http://localhost:3000 tarayıcıda bu adreste çalışacaktır.

 

