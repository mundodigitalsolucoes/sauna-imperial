export const SITE = {
  name: "Sauna Imperial",
  city: "São José do Rio Preto",
  state: "SP",
  address: "Rua Imperial, 676 — São José do Rio Preto, SP",
  phone: "+55 17 99999-9999",
  whatsappNumber: "5517999999999",
  whatsappMessage: "Olá, vi o site e gostaria de mais informações.",
  mapsEmbed: "https://www.google.com/maps?q=S%C3%A3o+Jos%C3%A9+do+Rio+Preto+SP&output=embed",
  mapsLink: "https://www.google.com/maps/dir/?api=1&destination=Sauna+Imperial+S%C3%A3o+Jos%C3%A9+do+Rio+Preto",
};

export const whatsappUrl = (msg?: string) =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(msg ?? SITE.whatsappMessage)}`;