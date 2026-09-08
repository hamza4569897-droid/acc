import React from 'react';
import { 
  Headset, MapPin, Phone, Printer as Fax, Compass, 
  Building, Lock, Send, MailOpen, GraduationCap, 
  AtSign, Mail, Building2, Globe, ShieldCheck, Factory
} from 'lucide-react';

export default function Contact() {
  return (
    <div className="flex flex-col w-full text-start">
      {/* Industrial Architectural Header Banner */}
      <section className="relative w-full bg-primary-container text-on-primary py-space-3xl overflow-hidden -mt-20 pt-32">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern height="40" id="industrial-grid" patternUnits="userSpaceOnUse" width="40">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"></path>
              </pattern>
            </defs>
            <rect fill="url(#industrial-grid)" height="100%" width="100%"></rect>
          </svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-gutter-mobile lg:px-gutter-desktop flex flex-col gap-space-sm">
          <div className="inline-flex items-center gap-space-xs self-start px-space-sm py-space-2xs rounded-full bg-secondary text-on-secondary font-caption-code text-caption-code">
            <Headset className="w-[14px] h-[14px]" />
            <span>قنوات الاتصال المباشرة · التصدير والتصنيع الدولي</span>
          </div>
          <h1 className="font-headline-xl text-headline-xl text-on-primary tracking-tight font-bold">
            اتصل بنا
          </h1>
          <p className="font-body-lg text-body-lg text-primary-fixed max-w-2xl leading-relaxed">
            يسعدنا تواصلكم واستقبال طلبات عروض الأسعار واستفسارات التصدير والشراكة.
          </p>
          <div className="flex flex-wrap items-center gap-space-md pt-space-xs text-on-primary-container font-caption-code text-caption-code">
            <span className="flex items-center gap-space-2xs"><span className="w-2 h-2 rounded-full bg-secondary-fixed"></span>استجابة خلال 48 ساعة</span>
            <span>•</span>
            <span className="flex items-center gap-space-2xs"><ShieldCheck className="w-[14px] h-[14px]" />نطاق المناطق الحرة الخاصة والعامة</span>
            <span>•</span>
            <span>ISO 9001 / WRAP Standards</span>
          </div>
        </div>
      </section>

      {/* Technical Branches Section */}
      <section className="max-w-7xl mx-auto w-full px-gutter-mobile lg:px-gutter-desktop -mt-8 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-lg">
          {/* Card 1: American Group */}
          <div className="bg-surface-container-lowest rounded-xl shadow-md p-space-lg flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1">
            <div>
              <div className="flex items-center justify-between pb-space-sm mb-space-md">
                <div className="flex items-center gap-space-xs">
                  <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary-container">
                    <Building2 className="w-[22px] h-[22px]" />
                  </div>
                  <div>
                    <span className="font-caption-code text-caption-code text-on-surface-variant block">BRANCH CODE // 01</span>
                    <h2 className="font-title-lg text-title-lg text-on-surface font-bold">American Group</h2>
                  </div>
                </div>
                <span className="px-space-xs py-space-2xs rounded-full bg-surface-container font-caption-code text-caption-code text-secondary font-semibold">HQ · مرغم</span>
              </div>
              <div className="flex flex-col gap-space-sm font-body-md text-body-md text-on-surface-variant mb-space-md">
                <div className="flex items-start gap-space-xs">
                  <MapPin className="text-secondary shrink-0 w-5 h-5 mt-0.5" />
                  <p className="leading-relaxed">كيلو 25.5 طريق الإسكندرية الصحراوي، مرغم، الإسكندرية، مصر</p>
                </div>
                <div className="flex items-center gap-space-xs">
                  <Phone className="text-secondary shrink-0 w-5 h-5" />
                  <span className="font-medium text-on-surface" dir="ltr">03/4700201</span>
                </div>
                <div className="flex items-center gap-space-xs">
                  <Fax className="text-secondary shrink-0 w-5 h-5" />
                  <span className="font-medium text-on-surface" dir="ltr">03/4700202</span>
                </div>
              </div>
            </div>
            <div className="w-full h-44 rounded-lg overflow-hidden relative shadow-sm">
              <iframe 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                loading="lazy" 
                allowFullScreen 
                referrerPolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?q=مجمع%20مرغم%20الصناعي،%20الإسكندرية&t=&z=13&ie=UTF8&iwloc=&output=embed"
              ></iframe>
              <div className="absolute bottom-2 right-2 bg-surface-container-lowest/90 backdrop-blur-sm px-space-xs py-space-2xs rounded text-on-surface font-caption-code text-caption-code flex items-center gap-space-2xs pointer-events-none">
                <Compass className="w-[14px] h-[14px] text-secondary" />
                <span>موقع مجمع مرغم الصناعي</span>
              </div>
            </div>
          </div>

          {/* Card 2: Qiz Group */}
          <div className="bg-surface-container-lowest rounded-xl shadow-md p-space-lg flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1">
            <div>
              <div className="flex items-center justify-between pb-space-sm mb-space-md">
                <div className="flex items-center gap-space-xs">
                  <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary-container">
                    <Globe className="w-[22px] h-[22px]" />
                  </div>
                  <div>
                    <span className="font-caption-code text-caption-code text-on-surface-variant block">BRANCH CODE // 02</span>
                    <h2 className="font-title-lg text-title-lg text-on-surface font-bold">Qiz Group</h2>
                  </div>
                </div>
                <span className="px-space-xs py-space-2xs rounded-full bg-secondary-container font-caption-code text-caption-code text-on-secondary-container font-semibold">منطقة حرة عامة</span>
              </div>
              <div className="flex flex-col gap-space-sm font-body-md text-body-md text-on-surface-variant mb-space-md">
                <div className="flex items-start gap-space-xs">
                  <Building className="text-secondary shrink-0 w-5 h-5 mt-0.5" />
                  <div>
                    <p className="leading-snug"><span className="font-semibold text-on-surface">العنوان 1:</span> طريق المنطقة الحرة العامة بالإسكندرية رقم 7، الإسكندرية</p>
                    <p className="leading-snug mt-1"><span className="font-semibold text-on-surface">العنوان 2:</span> طريق المنطقة الحرة العامة بالإسكندرية رقم 14، الإسكندرية، مصر</p>
                  </div>
                </div>
                <div className="flex items-center gap-space-xs">
                  <Phone className="text-secondary shrink-0 w-5 h-5" />
                  <span className="font-medium text-on-surface" dir="ltr">002-0345228</span>
                </div>
                <div className="flex items-center gap-space-xs">
                  <Fax className="text-secondary shrink-0 w-5 h-5" />
                  <span className="font-medium text-on-surface" dir="ltr">002-0345228</span>
                </div>
              </div>
            </div>
            <div className="w-full h-44 rounded-lg overflow-hidden relative shadow-sm">
              <iframe 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                loading="lazy" 
                allowFullScreen 
                referrerPolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?q=المنطقة%20الحرة%20العامة%20بالعامرية،%20الإسكندرية&t=&z=13&ie=UTF8&iwloc=&output=embed"
              ></iframe>
              <div className="absolute bottom-2 right-2 bg-surface-container-lowest/90 backdrop-blur-sm px-space-xs py-space-2xs rounded text-on-surface font-caption-code text-caption-code flex items-center gap-space-2xs pointer-events-none">
                <Compass className="w-[14px] h-[14px] text-secondary" />
                <span>المنطقة الحرة العامة (العامرية)</span>
              </div>
            </div>
          </div>

          {/* Card 3: First Group */}
          <div className="bg-surface-container-lowest rounded-xl shadow-md p-space-lg flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1">
            <div>
              <div className="flex items-center justify-between pb-space-sm mb-space-md">
                <div className="flex items-center gap-space-xs">
                  <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary-container">
                    <Factory className="w-[22px] h-[22px]" />
                  </div>
                  <div>
                    <span className="font-caption-code text-caption-code text-on-surface-variant block">BRANCH CODE // 03</span>
                    <h2 className="font-title-lg text-title-lg text-on-surface font-bold">First Group</h2>
                  </div>
                </div>
                <span className="px-space-xs py-space-2xs rounded-full bg-surface-container font-caption-code text-caption-code text-secondary font-semibold">مرغم · النسيج الدائري</span>
              </div>
              <div className="flex flex-col gap-space-sm font-body-md text-body-md text-on-surface-variant mb-space-md">
                <div className="flex items-start gap-space-xs">
                  <MapPin className="text-secondary shrink-0 w-5 h-5 mt-0.5" />
                  <p className="leading-relaxed">كيلو 25.5 طريق الإسكندرية الصحراوي، مرغم، الإسكندرية، مصر</p>
                </div>
                <div className="flex items-center gap-space-xs">
                  <Phone className="text-secondary shrink-0 w-5 h-5" />
                  <span className="font-medium text-on-surface" dir="ltr">03/4700202</span>
                </div>
                <div className="flex items-center gap-space-xs">
                  <Fax className="text-secondary shrink-0 w-5 h-5" />
                  <span className="font-medium text-on-surface" dir="ltr">03/4700202</span>
                </div>
              </div>
            </div>
            <div className="w-full h-44 rounded-lg overflow-hidden relative shadow-sm">
              <iframe 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                loading="lazy" 
                allowFullScreen 
                referrerPolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?q=مرغم،%20الإسكندرية&t=&z=13&ie=UTF8&iwloc=&output=embed"
              ></iframe>
              <div className="absolute bottom-2 right-2 bg-surface-container-lowest/90 backdrop-blur-sm px-space-xs py-space-2xs rounded text-on-surface font-caption-code text-caption-code flex items-center gap-space-2xs pointer-events-none">
                <Compass className="w-[14px] h-[14px] text-secondary" />
                <span>موقع مصانع فرست جروب</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual Communication Portals */}
      <section className="max-w-7xl mx-auto w-full px-gutter-mobile lg:px-gutter-desktop py-space-3xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
          {/* Primary Form */}
          <div className="lg:col-span-7 bg-surface-container-lowest rounded-xl p-space-xl shadow-md flex flex-col gap-space-md">
            <div className="flex flex-col gap-space-2xs">
              <div className="flex items-center justify-between">
                <span className="font-caption-code text-caption-code text-secondary font-bold tracking-wider">CF7 // ID: 665 · PROCUREMENT SPECIFICATION</span>
                <span className="px-space-xs py-space-2xs rounded bg-surface-container-low font-caption-code text-caption-code text-on-surface-variant font-mono">B2B RFQ PROTOCOL</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">طلب العروض</h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                طلب عرض أسعار لمشاريع علامتك من خلال حزم التكنولوجيا، ومقاييس الحجم، ومتطلبات الطلب. جاهدين وسنعمل قدر الإمكان لإرسال أقل الأسعار خلال 48 ساعة.
              </p>
            </div>
            <form className="flex flex-col gap-space-md mt-space-xs" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                <div className="flex flex-col gap-space-2xs">
                  <label className="font-label-md text-label-md text-on-surface">الاسم الكامل *</label>
                  <input className="w-full h-11 px-space-md rounded bg-surface-container-low text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest shadow-sm transition-all" placeholder="الاسم ثلاثي أو المسؤول التقني" required type="text" />
                </div>
                <div className="flex flex-col gap-space-2xs">
                  <label className="font-label-md text-label-md text-on-surface">اسم الشركة / المؤسسة *</label>
                  <input className="w-full h-11 px-space-md rounded bg-surface-container-low text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest shadow-sm transition-all" placeholder="العلامة التجارية الدولية أو المصنع" required type="text" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                <div className="flex flex-col gap-space-2xs">
                  <label className="font-label-md text-label-md text-on-surface">البريد الإلكتروني المؤسسي *</label>
                  <input className="w-full h-11 px-space-md rounded bg-surface-container-low text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest shadow-sm transition-all text-start" dir="ltr" placeholder="procurement@brand.com" required type="email" />
                </div>
                <div className="flex flex-col gap-space-2xs">
                  <label className="font-label-md text-label-md text-on-surface">حجم الطلب المتوقع (بالقطعة / بالطن) *</label>
                  <select className="w-full h-11 px-space-md rounded bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none focus:bg-surface-container-lowest shadow-sm transition-all" required defaultValue="">
                    <option disabled value="">حدد الشريحة الاستيعابية</option>
                    <option value="tier1">أقل من 10,000 قطعة (عينة تجارية واختبارات)</option>
                    <option value="tier2">10,000 – 50,000 قطعة (تشغيلة موسمية كاملة)</option>
                    <option value="tier3">50,000 – 250,000 قطعة (توريد سلسلة تجزئة)</option>
                    <option value="tier4">أكثر من 250,000 قطعة (عقود سنوية وتصدير مستمر)</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-space-2xs">
                <label className="font-label-md text-label-md text-on-surface">تفاصيل الحزمة التكنولوجية والمواصفات الفنية *</label>
                <textarea className="w-full p-space-md rounded bg-surface-container-low text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest shadow-sm transition-all resize-none" placeholder="أدخل تفاصيل التريكو أو النسيج (نوع الخيوط، الكثافة GSM، المعالجات الكيميائية، الفحوصات المختبرية المطلوبة، جدول الشحن)..." required rows={4}></textarea>
              </div>
              <div className="bg-surface-container-low p-space-sm rounded flex items-center justify-between">
                <div className="flex items-center gap-space-xs">
                  <Lock className="text-secondary w-5 h-5" />
                  <span className="font-caption-code text-caption-code text-on-surface-variant">جميع البيانات الهندسية والمواصفات محمية باتفاقيات سرية NDA متبادلة</span>
                </div>
                <span className="font-caption-code text-caption-code text-secondary font-bold">SECURE SSL 256-BIT</span>
              </div>
              <button className="w-full h-12 rounded bg-primary-container text-on-primary hover:bg-inverse-surface font-label-md text-label-md flex items-center justify-center gap-space-xs shadow-md transition-colors" type="submit">
                <span>إرسال طلب العرض الفوري</span>
                <Send className="w-[18px] h-[18px]" />
              </button>
            </form>
          </div>

          {/* Secondary Form & Service */}
          <div className="lg:col-span-5 flex flex-col gap-space-xl">
            <div className="bg-surface-container-lowest rounded-xl p-space-xl shadow-md flex flex-col gap-space-md">
              <div className="flex flex-col gap-space-2xs">
                <div className="flex items-center justify-between">
                  <span className="font-caption-code text-caption-code text-secondary font-bold tracking-wider">CF7 // ID: 484 · LOGISTICS & WAREHOUSE</span>
                  <Headset className="text-on-surface-variant w-[18px] h-[18px]" />
                </div>
                <h2 className="font-headline-md text-headline-md text-on-surface font-bold">خدمة العملاء</h2>
                <p className="font-body-md text-body-md text-on-surface-variant font-medium">
                  الاتصال بالشركة أو المخزن
                </p>
              </div>
              <form className="flex flex-col gap-space-md" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col gap-space-2xs">
                  <label className="font-label-md text-label-md text-on-surface">رقم البوليصة / معرف الاستفسار *</label>
                  <input className="w-full h-11 px-space-md rounded bg-surface-container-low text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest shadow-sm transition-all" placeholder="مثال: BL-2024-EG-9844 أو استفسار عام" required type="text" />
                </div>
                <div className="flex flex-col gap-space-2xs">
                  <label className="font-label-md text-label-md text-on-surface">الموضوع *</label>
                  <input className="w-full h-11 px-space-md rounded bg-surface-container-low text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest shadow-sm transition-all" placeholder="استلام شحنة، معاينة مستودع، فحص حاويات" required type="text" />
                </div>
                <div className="flex flex-col gap-space-2xs">
                  <label className="font-label-md text-label-md text-on-surface">الرسالة *</label>
                  <textarea className="w-full p-space-md rounded bg-surface-container-low text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest shadow-sm transition-all resize-none" placeholder="اكتب استفسارك الدقيق أو تفاصيل الشحنة والتوقيت المرجو..." required rows={3}></textarea>
                </div>
                <button className="w-full h-11 rounded bg-secondary text-on-secondary hover:bg-secondary-fixed hover:text-on-secondary-fixed font-label-md text-label-md flex items-center justify-center gap-space-xs shadow-sm transition-colors" type="submit">
                  <span>إرسال الاستفسار لخدمة العملاء</span>
                  <MailOpen className="w-[18px] h-[18px]" />
                </button>
              </form>
            </div>

            <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex items-center gap-space-md">
              <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0 shadow-inner">
                <img 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZ51nLPvt1t5chP931jj_mFj2utI9ID9JowpIj7fKpdc83nybdFgypHtKXOLaVcAbo0NSH6zLH-MJ3usWsxCDyceOqIph7vgpS8Qp-7iUzHUpOEG0FluFZCY0L5CIvTtnvGBUQHciMboNlwgqy3odQNMRd23qVle8j-mAFWQizJuVsGesEAXi8dQ9QIINEj5whP1nLUtrDje5FLvd9m_6-96rCDfHEFaYJuR_BAUTlk-YoeM5FZzYs"
                  alt="Quality Control Lab"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-caption-code text-caption-code text-secondary font-bold">LAB QUALITY CONTROL</span>
                <h4 className="font-title-md text-title-md font-bold text-on-surface">فحص واختبار المعايير الدقيقة</h4>
                <p className="font-body-md text-body-md text-on-surface-variant leading-tight mt-1">تجهيز المعامل المركزية لاستقبال العينات ومطابقة المقاييس المخبرية الدولية فور الطلب.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Executive Leadership Card */}
      <section className="w-full bg-surface-container-low py-space-3xl">
        <div className="max-w-7xl mx-auto px-gutter-mobile lg:px-gutter-desktop">
          <div className="flex flex-col items-center text-center mb-space-xl">
            <span className="font-caption-code text-caption-code text-secondary tracking-widest font-bold uppercase">Executive Engineering & Operations</span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold mt-space-2xs">فريق العمل</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mt-space-2xs">
              التواصل المباشر مع إدارة الهندسة والمطابقة الدولية لتنسيق الشراكات الصناعية وحزم التكنولوجيا.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-surface-container-lowest rounded-xl shadow-lg p-space-xl relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-space-xl">
              <div className="relative shrink-0">
                <div className="w-32 h-32 rounded-xl bg-primary-container text-on-primary flex flex-col items-center justify-center p-space-md shadow-md relative group">
                  <svg className="w-16 h-16 text-secondary-container" fill="none" stroke="currentColor" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="44" strokeDasharray="4 3" strokeWidth="2"></circle>
                    <path d="M 30 25 L 70 25 M 30 50 L 70 50 M 30 75 L 70 75" strokeLinecap="round" strokeWidth="3"></path>
                    <path d="M 38 18 L 38 82 M 50 18 L 50 82 M 62 18 L 62 82" stroke="currentColor" strokeLinecap="round" strokeWidth="3"></path>
                    <circle cx="50" cy="50" fill="currentColor" r="8" stroke="none"></circle>
                  </svg>
                  <span className="font-caption-code text-caption-code font-bold text-secondary-fixed mt-1 tracking-widest">AMER GROUP</span>
                </div>
                <div className="absolute -bottom-2 -left-2 bg-secondary text-on-secondary px-space-xs py-space-2xs rounded text-caption-code font-caption-code font-bold">
                  ENG DIR
                </div>
              </div>

              <div className="flex flex-col flex-grow text-start items-center md:items-start w-full">
                <div className="flex flex-wrap items-center justify-between w-full pb-space-xs">
                  <div>
                    <h3 className="font-headline-md text-headline-md font-bold text-on-surface">
                      المهندس أنتوني اميرهوم
                    </h3>
                    <span className="font-label-md text-label-md text-secondary font-semibold">
                      مدير التطوير الهندسي والعمليات الدولية
                    </span>
                  </div>
                  <span className="px-space-sm py-space-2xs rounded-full bg-surface-container font-caption-code text-caption-code text-on-surface-variant">
                    NJIT Certified
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-space-sm gap-x-space-lg w-full mt-space-md pt-space-md bg-surface-container-low/50 p-space-md rounded-lg">
                  <div className="flex items-center gap-space-xs">
                    <Globe className="text-secondary shrink-0 w-5 h-5" />
                    <div className="flex flex-col">
                      <span className="font-caption-code text-caption-code text-on-surface-variant">تليفون دولي</span>
                      <a className="font-body-md text-body-md font-bold text-on-surface hover:text-secondary transition-colors text-start" dir="ltr" href="tel:+12019366225">
                        +12019366225
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-space-xs">
                    <Phone className="text-secondary shrink-0 w-5 h-5" />
                    <div className="flex flex-col">
                      <span className="font-caption-code text-caption-code text-on-surface-variant">تليفون مصر</span>
                      <a className="font-body-md text-body-md font-bold text-on-surface hover:text-secondary transition-colors text-start" dir="ltr" href="tel:+201032631998">
                        +201032631998
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-space-xs md:col-span-2">
                    <GraduationCap className="text-secondary shrink-0 w-5 h-5" />
                    <div className="flex flex-col">
                      <span className="font-caption-code text-caption-code text-on-surface-variant">الإيميل</span>
                      <a className="font-body-md text-body-md font-bold text-secondary hover:underline" dir="ltr" href="mailto:aaa275@njit.edu">
                        aaa275@njit.edu
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-space-xs md:col-span-2">
                    <AtSign className="text-secondary shrink-0 w-5 h-5 mt-0.5" />
                    <div className="flex flex-col">
                      <span className="font-caption-code text-caption-code text-on-surface-variant">الإيميلات البديلة</span>
                      <div className="flex flex-wrap gap-x-space-md gap-y-1 mt-1 font-body-md text-body-md" dir="ltr">
                        <a className="text-on-surface hover:text-secondary font-medium transition-colors" href="mailto:tony.amirhom@yahoo.com">
                          tony.amirhom@yahoo.com
                        </a>
                        <span className="text-outline">&</span>
                        <a className="text-on-surface hover:text-secondary font-medium transition-colors" href="mailto:tony.amirhom@gmail.com">
                          tony.amirhom@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-space-sm mt-space-md w-full justify-end">
                  <a className="inline-flex items-center gap-space-2xs px-space-md py-space-xs rounded bg-primary-container text-on-primary font-label-md text-label-md hover:bg-inverse-surface transition-colors shadow-sm" href="mailto:aaa275@njit.edu">
                    <Mail className="w-4 h-4" />
                    <span>مراسلة فورية للمهندس</span>
                  </a>
                  <a className="inline-flex items-center gap-space-2xs px-space-md py-space-xs rounded bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors" href="tel:+201032631998">
                    <Phone className="w-4 h-4" />
                    <span>اتصال مباشر</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
