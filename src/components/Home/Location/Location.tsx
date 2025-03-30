export default function Contacto() {
  return (
    <section className="w-[100%] p-8 bg-gray-100 dark:bg-gray-900 rounded-xl shadow-md">
      <div className=" mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
          Contáctanos
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          📍 Carrera 64 #96 - 179, Barranquilla, Colombia
          <br />
          📞 +57 300 123 4567
          <br />
          📧 contacto@tatpet.com
          <br />
          🕒 Lunes - Sábado: 9:00 AM - 7:00 PM
        </p>

        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <iframe
            className="w-full h-[300px] sm:h-[400px] rounded-lg"
            src="https://maps.google.com/maps?width=600&height=400&hl=en&q=tatpet&t=&z=18&ie=UTF8&iwloc=B&output=embed"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
