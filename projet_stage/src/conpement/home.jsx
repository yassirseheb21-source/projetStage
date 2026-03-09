import { Link } from "react-router-dom";
import { Calendar, FileText, Phone, AlertCircle, Building2, Users } from "lucide-react";

export default function Home() {
  const services = [
    { title: "الوثائق الإدارية", icon: FileText, link: "/electronic-services" },
    { title: "حجز موعد", icon: Calendar, link: "/appointment" },
    { title: "تقديم شكاية", icon: AlertCircle, link: "/complaint" },
    { title: "خدمات المواطن", icon: Users, link: "/citizen-services" },
  ];

  const emergencyNumbers = [
    { service: "الشرطة", number: "19" },
    { service: "الدرك الملكي", number: "177" },
    { service: "الوقاية المدنية", number: "150" },
    { service: "الإسعاف", number: "141" },
  ];

  const news = [
    {
      id: 1,
      title: "افتتاح مركز ثقافي جديد بأكدال",
      date: "2026-03-08",
      image: "https://images.unsplash.com/photo-1763146741552-a37625b0529b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb3JvY2NvJTIwY3VsdHVyYWwlMjBjZW50ZXJ8ZW58MXx8fHwxNzczMDUzMjU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 2,
      title: "حملة تنظيف واسعة في أحياء المقاطعة",
      date: "2026-03-07",
      image: "https://images.unsplash.com/photo-1613169465179-533a5d1ce175?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb3JvY2NvJTIwbWFya2V0JTIwYmF6YWFyfGVufDF8fHx8MTc3Mjk5MTcyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 3,
      title: "إطلاق خدمات إلكترونية جديدة",
      date: "2026-03-05",
      image: "https://images.unsplash.com/photo-1757163587904-14cdadfda026?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb3JvY2NvJTIwdHJhZGl0aW9uYWwlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzczMDUzMjU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  const events = [
    { title: "ملتقى الشباب والتنمية", date: "15 مارس 2026" },
    { title: "معرض الفنون التشكيلية", date: "20 مارس 2026" },
    { title: "يوم تطوعي للنظافة", date: "25 مارس 2026" },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative h-[500px] bg-gradient-to-l from-red-600 to-green-600 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1566486135404-f25bba08c169?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSYWJhdCUyME1vcm9jY28lMjBjaXR5c2NhcGV8ZW58MXx8fHwxNzczMDUyODEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="الرباط"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white text-center w-full">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">مرحبا بكم</h1>
            <h2 className="text-2xl md:text-3xl mb-6">مقاطعة أكدال الرياض</h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              نسعى لتقديم أفضل الخدمات للمواطنين وتطوير البنية التحتية
            </p>
            <Link
              to="/electronic-services"
              className="inline-block bg-white text-red-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              الخدمات الإلكترونية
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">خدمات سريعة</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-red-600 hover:shadow-lg transition-all"
              >
                <service.icon className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="font-bold text-lg">{service.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">آخر الأخبار</h2>
            <Link to="/news" className="text-red-600 hover:underline">
              عرض الكل ←
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {news.map((item) => (
              <Link
                key={item.id}
                to={`/news/${item.id}`}
                className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">الفعاليات القادمة</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 border-r-4 border-green-600">
                <div className="flex items-start gap-3">
                  <Calendar className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">{event.title}</h3>
                    <p className="text-gray-600">{event.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">أرقام الطوارئ</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {emergencyNumbers.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center border-2 border-red-600">
                <Phone className="w-8 h-8 text-red-600 mx-auto mb-3" />
                <p className="font-bold text-2xl text-red-600 mb-2">{item.number}</p>
                <p className="text-gray-700">{item.service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              to="/council"
              className="bg-gradient-to-l from-red-600 to-red-700 text-white rounded-lg p-8 hover:shadow-lg transition-shadow"
            >
              <Building2 className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-2">المجلس البلدي</h3>
              <p className="opacity-90">تعرف على أعضاء المجلس ونشاطاته</p>
            </Link>

            <Link
              to="/my-district"
              className="bg-gradient-to-l from-green-600 to-green-700 text-white rounded-lg p-8 hover:shadow-lg transition-shadow"
            >
              <Users className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-2">مقاطعتي</h3>
              <p className="opacity-90">اكتشف المعالم والمرافق في مقاطعتك</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}