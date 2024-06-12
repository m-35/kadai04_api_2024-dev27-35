document.getElementById('generateQR').addEventListener('click', function() {
  var url = document.getElementById('urlInput').value;
  if (url) {
      var qrCodeContainer = document.getElementById('qrCode');
      qrCodeContainer.innerHTML = ''; // 以前のQRコードをクリア

      // QRコード画像を生成
      var qrCodeImage = document.createElement('img');
      qrCodeImage.onload = function() {
          // QRコード画像の読み込みが完了したらロゴ画像を追加
          var qrLogo = document.createElement('img');
          qrLogo.src = 'img/COCO.png'; // ロゴ画像のURLを設定
          qrLogo.style.position = 'absolute';
          qrLogo.style.top = '50%';
          qrLogo.style.left = '50%';
          qrLogo.style.transform = 'translate(-50%, -50%)';
          qrLogo.style.width = '30px'; // ロゴ画像のサイズを設定
          qrLogo.style.height = '30px';
          qrLogo.style.zIndex = '2'; // ロゴ画像を前面に表示
          qrCodeContainer.appendChild(qrLogo); // ロゴ画像をqrCodeContainerに追加
      };
      qrCodeImage.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + encodeURIComponent(url); // QRコードのURLを設定
      qrCodeImage.style.display = 'block';
      qrCodeImage.style.zIndex = '1'; // QRコード画像を背面に表示
      qrCodeContainer.appendChild(qrCodeImage); // img要素をqrCodeContainerに追加

      // 保存と削除ボタンを表示
      document.getElementById('saveQR').style.display = 'inline';
      document.getElementById('deleteQR').style.display = 'inline';
  }
});
