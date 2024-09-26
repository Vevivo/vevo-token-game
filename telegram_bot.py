import logging
from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup, WebAppInfo
from telegram.ext import Application, CommandHandler

# Loglama yapılandırması
logging.basicConfig(
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s', level=logging.INFO)
logger = logging.getLogger(__name__)

# Web Uygulamasını başlatma komutu
async def start(update: Update, context) -> None:
    # Web App butonu
    keyboard = [
        [InlineKeyboardButton(
            "VEVO Oyununu Aç", 
            web_app=WebAppInfo(url="https://senin-web-siten.com"))]
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)

    # Kullanıcıya buton ile mesaj gönder
    await update.message.reply_text(
        "VEVO Token Kazanmak için butona tıkla!",
        reply_markup=reply_markup
    )

# Ana fonksiyon
def main():
    # Telegram API tokeninizi buraya ekleyin
    application = Application.builder().token("8112058240:AAHuO1jL5G7iUPiFMHcoKE8zZObdhmdPL-0").build()

    # Komutları tanımlayın
    application.add_handler(CommandHandler("start", start))

    # Botu çalıştır
    application.run_polling()

if __name__ == '__main__':
    main()
