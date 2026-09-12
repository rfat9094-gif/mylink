<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>البطاقة الرقمية | Digital Card</title>
  <link rel="stylesheet" href="style.css">
  <!-- مكتبة الأيقونات Font Awesome -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>

  <div class="card-container">
    <!-- صورة الغلاف -->
    <div class="cover-image">
      <img src="https://i.postimg.cc/bJFFRzXz/file-00000000ce8081f4975f3a563fb409da.png" alt="Cover" id="cover-img">
    </div>

    <!-- معلومات الشخص وصورة البروفايل -->
    <div class="profile-header">
      <div class="avatar-wrapper">
        <img src="https://i.postimg.cc/8P9c03gQ/file-00000000f0d481fd97831fe66323116f.png" alt="Profile" id="avatar-img">
      </div>
      <h2 class="user-name">mohamed rfat</h2>
      <p class="user-title">graphic designer💪.</p>
    </div>

    <!-- قسم عن الشخص -->
    <div class="section-about">
      <h3>ABOUT</h3>
      <p class="bio-text">مصمم جرافيك ومبرمج، أحوّل الأفكار إلى تصاميم وحلول رقمية مبتكرة.</p>
    </div>

    <!-- شبكة أزرار التواصل والدفع -->
    <div class="section-contacts">
      <h3>CONTACTS</h3>
      
      <div class="icon-grid">
        <!-- اتصال هاتف -->
        <a href="tel:+201021207046" class="icon-item">
          <div class="icon-box"><i class="fa-solid fa-phone"></i></div>
          <span>Phone</span>
        </a>

        <!-- بريد إلكتروني -->
        <a href="mailto:client@example.com" class="icon-item">
          <div class="icon-box"><i class="fa-solid fa-envelope"></i></div>
          <span>Email</span>
        </a>

        <!-- فيسبوك -->
        <a href="https://www.facebook.com/share/18F2c9g8qm/" target="_blank" class="icon-item">
          <div class="icon-box facebook"><i class="fa-brands fa-facebook-f"></i></div>
          <span>Facebook</span>
        </a>

        <!-- سناب شات -->

        <!-- تيك توك -->
        <a href="https://www.tiktok.com/@picasso.31?_r=1&_t=ZS-98nds702H37" target="_blank" class="icon-item">
          <div class="icon-box tiktok"><i class="fa-brands fa-tiktok"></i></div>
          <span>TikTok</span>
        </a>

        <!-- واتساب -->
        <a href="https://wa.me/201021207046" target="_blank" class="icon-item">
          <div class="icon-box whatsapp"><i class="fa-brands fa-whatsapp"></i></div>
          <span>WhatsApp</span>
        </a>

        <!-- إنستغرام -->
        <a href="https://instagram.com" target="_blank" class="icon-item">
          <div class="icon-box instagram"><i class="fa-brands fa-instagram"></i></div>
          <span>Instagram</span>
        </a>



        <!-- فودافون كاش -->
        <div class="icon-item" onclick="copyData('01021207046', 'رقم فودافون كاش')">
          <div class="icon-box vodafone"><i class="fa-solid fa-wallet"></i></div>
          <span>Vodafone Cash</span>
        </div>

        <!-- إنستا باي -->
        <div class="icon-item" onclick="copyData('username@instapay', 'عنوان إنستا باي')">
          <div class="icon-box instapay"><i class="fa-solid fa-money-bill-transfer"></i></div>
          <span>InstaPay</span>
        </div>
      </div>
    </div>

    <!-- أزرار العمليات السفلية -->
    <div class="action-buttons">
      <button class="btn btn-share" onclick="shareProfile()"><i class="fa-solid fa-share-nodes"></i> Share</button>
      <button class="btn btn-save" onclick="downloadVCard()"><i class="fa-regular fa-bookmark"></i> Save contact</button>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>
