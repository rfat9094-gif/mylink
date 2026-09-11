// نسخ بيانات فودافون كاش أو إنستا باي عند الضغط عليها
function copyData(text, title) {
    navigator.clipboard.writeText(text).then(() => {
      alert(`تم نسخ ${title}: ${text}`);
    }).catch(err => {
      console.error('خطأ في النسخ: ', err);
    });
  }
  
  // مشاركة البطاقة عبر ميزة المشاركة في الموبايل
  function shareProfile() {
    if (navigator.share) {
      navigator.share({
        title: 'بطاقة محمد سمير',
        url: window.location.href
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('تم نسخ رابط البطاقة إلى الحافظة!');
    }
  }
  
  // تنزيل ملف جهة الاتصال vCard تلقائياً عند الضغط على Save Contact
  function downloadVCard() {
    const vcardData = 
  `BEGIN:VCARD
  VERSION:3.0
  FN:محمد سمير
  TITLE:Fitness Trainer
  TEL;TYPE=CELL:+201000000000
  EMAIL:client@example.com
  NOTE:Discipline beats motivation.
  END:VCARD`;
  
    const blob = new Blob([vcardData], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Mohamed_Samir.vcf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }