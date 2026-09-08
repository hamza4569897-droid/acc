import React, { useState } from 'react';
import { 
  Layers, Settings, Printer, Scissors, Wand2, Ruler, Sliders, ArrowLeft, Mail, ShieldCheck, Factory 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CapabilitiesProps {
  setPage?: (page: string) => void;
}

export default function Capabilities({ setPage }: CapabilitiesProps = {}) {
  const [activeTab, setActiveTab] = useState('products');

  const tabs = [
    { id: 'products', label: 'منتجاتنا', icon: Layers },
    { id: 'knitting', label: 'الحياكة', icon: Settings },
    { id: 'printing', label: 'الطباعة', icon: Printer },
    { id: 'cutting', label: 'قص', icon: Scissors },
    { id: 'embroidery', label: 'التطريز', icon: Wand2 },
    { id: 'sewing', label: 'الخياطة', icon: Ruler },
  ];


  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full -mt-20 pt-28 pb-16 bg-surface-container-low overflow-hidden text-start">
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#21695f_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="max-w-7xl mx-auto px-gutter-mobile lg:px-gutter-desktop relative z-10">
          <div className="flex flex-col items-start max-w-3xl">
            <div className="inline-flex items-center gap-space-xs px-space-sm py-space-2xs rounded-full bg-secondary-container text-on-secondary-container font-caption-code text-caption-code mb-space-sm shadow-sm">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              <span>AMERICAN GROUP INDUSTRIAL METRICS · BITOTEX CAPABILITIES</span>
            </div>
            <h1 className="font-display-hero text-display-hero text-on-surface tracking-tight mb-space-xs">
              قدراتنا
            </h1>
            <p className="font-headline-md text-headline-md text-secondary font-semibold mb-space-md">
              Industrial Precision & Technical Textiles
            </p>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed max-w-2xl">
              تقنيات تصنيع متطورة، خطوط إنتاج حديثة، وأعلى طاقة إنتاجية في صناعة النسيج والملابس المحبوكة.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-space-md mt-space-xl">
            <div className="p-space-md bg-surface-container-lowest rounded-xl shadow-sm flex flex-col justify-between border-r border-outline-variant/30 first:border-none">
              <span className="font-caption-code text-caption-code text-on-surface-variant uppercase text-start">Knitting Plant</span>
              <div className="flex items-baseline gap-space-xs mt-space-2xs">
                <span className="font-headline-xl text-headline-xl font-bold text-on-surface">250+</span>
                <span className="font-label-md text-label-md text-secondary font-semibold">ماكينة دائرية</span>
              </div>
              <span className="font-label-sm text-label-sm text-outline mt-space-2xs text-start">Mayer & Cie / Terrot German Tech</span>
            </div>
            <div className="p-space-md bg-surface-container-lowest rounded-xl shadow-sm flex flex-col justify-between border-r border-outline-variant/30">
              <span className="font-caption-code text-caption-code text-on-surface-variant uppercase text-start">Daily Output</span>
              <div className="flex items-baseline gap-space-xs mt-space-2xs">
                <span className="font-headline-xl text-headline-xl font-bold text-on-surface">45,000</span>
                <span className="font-label-md text-label-md text-secondary font-semibold">كجم / يوم</span>
              </div>
              <span className="font-label-sm text-label-sm text-outline mt-space-2xs text-start">حياكة دقيقة على مدار الساعة</span>
            </div>
            <div className="p-space-md bg-surface-container-lowest rounded-xl shadow-sm flex flex-col justify-between border-r border-outline-variant/30">
              <span className="font-caption-code text-caption-code text-on-surface-variant uppercase text-start">Gauges & Diameters</span>
              <div className="flex items-baseline gap-space-xs mt-space-2xs">
                <span className="font-headline-xl text-headline-xl font-bold text-on-surface">GG 14-44</span>
                <span className="font-label-md text-label-md text-secondary font-semibold">Gauge Range</span>
              </div>
              <span className="font-label-sm text-label-sm text-outline mt-space-2xs text-start">Single & Double Jersey, Jacquards</span>
            </div>
            <div className="p-space-md bg-surface-container-lowest rounded-xl shadow-sm flex flex-col justify-between border-r border-outline-variant/30">
              <span className="font-caption-code text-caption-code text-on-surface-variant uppercase text-start">Quality Precision</span>
              <div className="flex items-baseline gap-space-xs mt-space-2xs">
                <span className="font-headline-xl text-headline-xl font-bold text-on-surface">100%</span>
                <span className="font-label-md text-label-md text-secondary font-semibold">فحص إلكتروني</span>
              </div>
              <span className="font-label-sm text-label-sm text-outline mt-space-2xs text-start">نظام استشعار الكاميرات البصرية</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs & Content Section */}
      <section className="max-w-7xl mx-auto w-full px-gutter-mobile lg:px-gutter-desktop py-space-2xl">
        <div className="w-full bg-surface-container-lowest p-space-xs rounded-xl shadow-sm mb-space-xl overflow-x-auto">
          <div className="flex items-center gap-space-xs min-w-max">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-space-lg py-space-sm rounded-lg font-title-md text-title-md transition-all duration-200 flex items-center gap-space-xs ${
                    isActive 
                      ? 'font-bold text-on-primary bg-primary-container shadow-sm' 
                      : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            {activeTab === 'products' && (
              <motion.div
                key="products"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="bg-surface-container-lowest p-space-xl lg:p-space-2xl rounded-xl shadow-sm mb-space-xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
                  <div className="lg:col-span-8 flex flex-col items-start text-start">
                    <div className="flex items-center gap-space-xs mb-space-xs">
                      <span className="font-caption-code text-caption-code uppercase text-secondary font-bold tracking-widest">PRODUCTION CAPACITIES SPECIFICATION</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-outline-variant"></span>
                      <span className="font-caption-code text-caption-code text-on-surface-variant">BITOTEX-MFG-2024</span>
                    </div>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold leading-snug mb-space-md">
                      250 ماكينة حياكة متطورة تنتج كافة أنواع أقمشة التريكو والنسيج المحبوك: السينجل جيرسي، الريب المضلع، البيكيه، الإنترلوك، والجاكارد والخطوط الهندسية.
                    </h2>
                    <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-space-lg">
                      بفضل مرافقنا المتقدمة الكائنة في المنطقة الحرة بالإسكندرية، نوفر تكاملاً صناعياً متكاملاً يغطي أرقى أنواع الغزول القطنية المصرية الطويلة التيلة (Giza Cotton)، الألياف المخلوطة والسباندكس الصناعي، لإنتاج منسوجات عالمية تلبي متطلبات كبرى ماركات الملابس العالمية.
                    </p>
                    <div className="flex flex-wrap gap-space-xs">
                      {['Single Jersey (السينجل جيرسي)', 'Piqué (البيكه المضلع)', 'Interlock (الانترلوك المزدوج)', 'Electronic Jacquard (الجاكارد الإلكتروني)', 'Rib & Fleece (الريب والميلتون)'].map(tag => (
                        <span key={tag} className="px-space-sm py-space-2xs rounded-full bg-surface-container font-caption-code text-caption-code text-on-surface">{tag}</span>
                      ))}
                      <span className="px-space-sm py-space-2xs rounded-full bg-secondary-container text-on-secondary-container font-caption-code text-caption-code font-bold">Engineering Stripes (الخطوط الهندسية)</span>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-4 bg-surface-container-low p-space-lg rounded-xl flex flex-col justify-between text-start">
                    <div className="flex items-center justify-between mb-space-md">
                      <span className="font-title-sm font-bold text-on-surface">مؤشر الطاقة ومراقبة الجودة</span>
                      <Sliders className="w-5 h-5 text-secondary" />
                    </div>
                    <div className="flex items-center justify-center py-space-md">
                      <div className="relative flex items-center justify-center">
                        <svg className="w-36 h-36 transform -rotate-90" viewBox="0 0 120 120">
                          <circle className="text-surface-container-high" cx="60" cy="60" fill="transparent" r="50" stroke="currentColor" strokeWidth="10"></circle>
                          <circle className="text-secondary" cx="60" cy="60" fill="transparent" r="50" stroke="currentColor" strokeDasharray="314.159" strokeDashoffset="31.41" strokeLinecap="round" strokeWidth="10"></circle>
                        </svg>
                        <div className="absolute flex flex-col items-center">
                          <span className="font-headline-md text-headline-md font-bold text-on-surface">99.8%</span>
                          <span className="font-caption-code text-caption-code text-on-surface-variant">كفاءة تشغيلية</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-space-xs text-caption-code font-caption-code pt-space-sm">
                      <div className="flex justify-between text-on-surface-variant">
                        <span>فحص إلكتروني دقيق للأقمشة</span>
                        <span className="font-bold text-on-surface">Camera Sensory 0.1mm</span>
                      </div>
                      <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
                        <div className="bg-secondary h-full rounded-full" style={{ width: '98%' }}></div>
                      </div>
                      <div className="flex justify-between text-on-surface-variant pt-space-xs">
                        <span>مطابقة المعايير الأمريكية والأوروبية</span>
                        <span className="font-bold text-secondary">AATCC & ISO</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'knitting' && (
              <motion.div
                key="knitting"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm mb-space-xl text-start"
              >
                <h3 className="font-headline-md text-headline-md text-on-surface font-bold mb-space-sm">تقنيات الحياكة الدائرية فائقة الدقة</h3>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  تضم صالات الحياكة الدائرية 250 وحدة ألمانية وإيطالية متطورة ومزودة بأجهزة استشعار التوتر الإلكترونية لتغذية الخيوط (Memminger-IRO feeders) مما يضمن كثافة نسيج موحدة وغياب العيوب في أقمشة البيكه، السينجل جيرسي، والانترلوك المعقد.
                </p>
              </motion.div>
            )}
            
            {activeTab === 'printing' && (
              <motion.div
                key="printing"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm mb-space-xl text-start"
              >
                <h3 className="font-headline-md text-headline-md text-on-surface font-bold mb-space-sm">خطوط الطباعة الرقمية والشاشات الدوارة</h3>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  أنظمة طباعة دوارة أوتوماتيكية عالية السرعة وطباعة نفث الحبر الرقمية المتوافقة مع معايير Oeko-Tex Standard 100 وباستخدام أحبار مائية صديقة للبيئة تضمن ألواناً زاهية وثباتاً فائقاً للغسيل والتعرض الضوئي.
                </p>
              </motion.div>
            )}
            
            {activeTab === 'cutting' && (
              <motion.div
                key="cutting"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm mb-space-xl text-start"
              >
                <h3 className="font-headline-md text-headline-md text-on-surface font-bold mb-space-sm">قسم القص الآلي بالليزر وأنظمة CAD/CAM</h3>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  محطات قص كمبيوترية مدمجة بأذرع روبوتية لقص طبقات متعددة من الأقمشة المحبوكة بدقة ميكرونية متناهية لتقليل الهدر وتعزيز استغلال النسيج الخام إلى أكثر من 92%.
                </p>
              </motion.div>
            )}

            {activeTab === 'embroidery' && (
              <motion.div
                key="embroidery"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm mb-space-xl text-start"
              >
                <h3 className="font-headline-md text-headline-md text-on-surface font-bold mb-space-sm">ماكينات التطريز متعددة الرؤوس الصناعية</h3>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  ماكينات تطريز كمبيوترية تزيد عن 20 رأساً في الماكينة الواحدة بتوجيه دقيق للغرز، قادرة على إنجاز أشكال وتطريزات ثلاثية الأبعاد وعلامات تجارية محبوكة بدقة فائقة وبسرعات تصل إلى 1200 غرزة في الدقيقة.
                </p>
              </motion.div>
            )}

            {activeTab === 'sewing' && (
              <motion.div
                key="sewing"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm mb-space-xl text-start"
              >
                <h3 className="font-headline-md text-headline-md text-on-surface font-bold mb-space-sm">خطوط التجميع والخياطة الهندسية المتطورة</h3>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  خطوط تجميع معيارية تعتمد نظام Lean Manufacturing المنساب لتجميع القمصان والملابس المحبوكة بكافة تفاصيلها مع ماكينات الأوفرلوك والأورليه ذاتية التشحيم لضمان متانة ونعومة الوصلات.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Industrial Machinery Photo Gallery */}
      <section className="max-w-7xl mx-auto w-full px-gutter-mobile lg:px-gutter-desktop pb-space-4xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg text-start">
          <div>
            <div className="flex items-center gap-space-xs text-secondary font-label-md text-label-md mb-space-2xs justify-end md:justify-start">
              <Factory className="w-[18px] h-[18px]" />
              <span>معرض البنية التحتية والماكينات المتخصصة</span>
            </div>
            <h3 className="font-headline-xl text-headline-xl font-bold text-on-surface">
              خطوط الإنتاج والتكنولوجيا المتكاملة
            </h3>
          </div>
          <span className="font-caption-code text-caption-code text-on-surface-variant mt-space-2xs md:mt-0">
            عرض دقيق للأنوال الميكانيكية، بكرات الغزل الدوارة وأنظمة الفحص
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg text-start">
          {/* Card 1 */}
          <div className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
            <div className="relative h-64 w-full overflow-hidden bg-surface-container">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlOv7yq5qo-aX8l2h1D9dR818DqBLrxDARE5Ytt2EmKMRcSHj1f-laE6INfM-bCfVWBl5Sh8o7mFh-LsBG-tDoR7USSsccwrD2g3L_TM_li1CTkyenkEo9K3j0zQqwJMXuLwBq7-1A9bnfU11YdpRGzodYL2vq-NEAIDKPegF2sx-1s0hqIeSijV14R4C_KHJRRjlevwz8zJGERXl3ZnN_dMuLxOMm9OyDQD7UoaSfgbWTJjFC3JU3" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" 
                alt="Circular Knitting Machines Room" 
              />
              <div className="absolute top-3 right-3 bg-surface-container-lowest/90 backdrop-blur-md px-space-sm py-space-2xs rounded-md shadow-sm">
                <span className="font-caption-code text-caption-code font-bold text-on-surface">KNT-CIRC-01</span>
              </div>
              <div className="absolute bottom-3 left-3 bg-primary-container/85 backdrop-blur-md text-on-primary px-space-sm py-space-2xs rounded text-caption-code font-caption-code">
                250+ ماكينة حياكة
              </div>
            </div>
            <div className="p-space-lg flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-on-surface-variant font-caption-code text-caption-code mb-space-2xs">
                  <span>ماكينات الحياكة الدائرية الألمانية</span>
                  <span className="text-secondary font-bold">Mayer & Cie</span>
                </div>
                <h4 className="font-title-lg text-title-lg font-bold text-on-surface mb-space-xs">صالات إنتاج السينجل والبيكه</h4>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  صفوف متراصة من أنوال الحياكة الدائرية عالية السرعة المجهزة بأنظمة مراقبة الشد الآلي للأقمشة المحبوكة والخطوط المنتظمة.
                </p>
              </div>
              <div className="pt-space-md mt-space-md flex items-center justify-between text-caption-code font-caption-code bg-surface-container-low px-space-sm py-space-2xs rounded">
                <span className="text-on-surface-variant">السرعة القصوى:</span>
                <span className="font-bold text-on-surface" dir="ltr">35 - 42 RPM</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
            <div className="relative h-64 w-full overflow-hidden bg-surface-container">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCf6pE1TQytsPKZeORiyDGIFZcfwWdhFAH3Q6jSEmFFQUxsYukMPjTwqZRJh5WlvdO3J7lwxrQNwJxrySak0TzKoU1hyBxReK05XOmr-OUfK6Qu8I7YMX8bqy2q3Ya8y8WgYxMEOobvyVTDR-12ThIH3ug2fyYbU--vaEvxVe0uUsIZ0ZosCsDtIEXWhfVLWJcZCaaERfdoYzt4scgYMkksYI4N5x-zThEgqTvKGD7FopmhQ9ZhPVji" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" 
                alt="Precision Yarn Creels & Cones" 
              />
              <div className="absolute top-3 right-3 bg-surface-container-lowest/90 backdrop-blur-md px-space-sm py-space-2xs rounded-md shadow-sm">
                <span className="font-caption-code text-caption-code font-bold text-on-surface">YRN-SPOOL-02</span>
              </div>
              <div className="absolute bottom-3 left-3 bg-primary-container/85 backdrop-blur-md text-on-primary px-space-sm py-space-2xs rounded text-caption-code font-caption-code">
                تغذية خيوط متزامنة
              </div>
            </div>
            <div className="p-space-lg flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-on-surface-variant font-caption-code text-caption-code mb-space-2xs">
                  <span>أنظمة الكريل المغذية للخيوط</span>
                  <span className="text-secondary font-bold">IRO-Memminger</span>
                </div>
                <h4 className="font-title-lg text-title-lg font-bold text-on-surface mb-space-xs">بكرات غزل القطن طويل التيلة</h4>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  توزيع هندسي متقن لحوامل البكرات المغذية لرؤوس الإبر لضمان استقرار تدفق الخيط بدون أي احتكاك أو تغير في العيار.
                </p>
              </div>
              <div className="pt-space-md mt-space-md flex items-center justify-between text-caption-code font-caption-code bg-surface-container-low px-space-sm py-space-2xs rounded">
                <span className="text-on-surface-variant">عيار الخيوط:</span>
                <span className="font-bold text-on-surface" dir="ltr">Ne 20/1 - Ne 80/1</span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
            <div className="relative h-64 w-full overflow-hidden bg-surface-container">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5FykP16kLZ-yJcZL-LuHKOsOy6B3MXNJ2hBHUdlLmhss04adV1iG-w5-wpWT_JZevDn8jnZMN26ZJUoUKFCnr-kKx3ZTJjfBrXxfN8k3SGEcBeDB3gMzJ87NOs1A8u-XzFyNGmcuCGS5eAkMudg4vqSj4_yjbOPkP3OhfvxtsET7Eu1g8EUiaqHBXXwZcs0bDNxQVGIcJcgzlPdZn4Y4oCfOucRDTg9Po3loAGhX7Wjya1B-HQwOd" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" 
                alt="Electronic Jacquard & Needle Bed" 
              />
              <div className="absolute top-3 right-3 bg-surface-container-lowest/90 backdrop-blur-md px-space-sm py-space-2xs rounded-md shadow-sm">
                <span className="font-caption-code text-caption-code font-bold text-on-surface">JCQ-MECH-03</span>
              </div>
              <div className="absolute bottom-3 left-3 bg-primary-container/85 backdrop-blur-md text-on-primary px-space-sm py-space-2xs rounded text-caption-code font-caption-code">
                حياكة جاكارد إلكترونية
              </div>
            </div>
            <div className="p-space-lg flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-on-surface-variant font-caption-code text-caption-code mb-space-2xs">
                  <span>أسطوانة الإبر الفولاذية</span>
                  <span className="text-secondary font-bold">Groz-Beckert</span>
                </div>
                <h4 className="font-title-lg text-title-lg font-bold text-on-surface mb-space-xs">تقنية الجاكارد والانترلوك المعقد</h4>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  إبر دقيقة من سبائك الفولاذ المصلد يتم التحكم بحركتها كهرومغناطيسياً لتوليد رسومات النسيج والأنسجة المضلعة بجودة قياسية.
                </p>
              </div>
              <div className="pt-space-md mt-space-md flex items-center justify-between text-caption-code font-caption-code bg-surface-container-low px-space-sm py-space-2xs rounded">
                <span className="text-on-surface-variant">التحكم:</span>
                <span className="font-bold text-on-surface">Electronic Needle Selection</span>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
            <div className="relative h-64 w-full overflow-hidden bg-surface-container">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_VQN4JtZRsFAwuCbFNtpw0QBVjlTWQuNJM1rlseXIU00CgE7oKpVc3Apv2-XT8pVoL-2bTFJq_6pjcAV7THufHNbzuuDZ6BSkGRXocrFw_uKQL1jE1p1x22pp5Khj7EvCo0h4w0hWRPvjvy-znEwGKHN0soTsTRFSWOqM6Iza9TjX4CDJxI7U8tze7ZViCayBOg0l7ILk_bN_emJGIsejW1udkPgIi4-MlDdA-So6VSqjuOWH1I2x" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" 
                alt="Automated Fabric Rolls & Inspection" 
              />
              <div className="absolute top-3 right-3 bg-surface-container-lowest/90 backdrop-blur-md px-space-sm py-space-2xs rounded-md shadow-sm">
                <span className="font-caption-code text-caption-code font-bold text-on-surface">QC-SCAN-04</span>
              </div>
              <div className="absolute bottom-3 left-3 bg-primary-container/85 backdrop-blur-md text-on-primary px-space-sm py-space-2xs rounded text-caption-code font-caption-code">
                فحص الجودة 4-Point System
              </div>
            </div>
            <div className="p-space-lg flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-on-surface-variant font-caption-code text-caption-code mb-space-2xs">
                  <span>فحص واستلام الأثواب</span>
                  <span className="text-secondary font-bold">Laser Inspection</span>
                </div>
                <h4 className="font-title-lg text-title-lg font-bold text-on-surface mb-space-xs">لفائف النسيج المحبوك والفحص الآلي</h4>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  أثواب الأقمشة تمر تحت إضاءة خلفية دقيقة وحساسات ضوئية لاكتشاف أدق العيوب والغرز غير المنتظمة قبل نقلها للقص.
                </p>
              </div>
              <div className="pt-space-md mt-space-md flex items-center justify-between text-caption-code font-caption-code bg-surface-container-low px-space-sm py-space-2xs rounded">
                <span className="text-on-surface-variant">معيار التقييم:</span>
                <span className="font-bold text-on-surface">ASTM D5430 Standard</span>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
            <div className="relative h-64 w-full overflow-hidden bg-surface-container">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9EsPK3ehqg5zWw1zkNQiStCbEltdWdLCeale-ribe2Z0VgPf5MeWF5ddYtwftn4M9Fth0VWebXsIhNOmE9c_GgFZejmjCtg5gYEB0-JwI9e9phrTDT62XSFpuybQ_uuGU8BVbBfwlzSx6hBWrrUYn0g52VPB1hCUUnG0a9RXezRKmgEQ8PurhwBW9M5r6wtmv6-FZOc1qisypgLBeRa8ZZ0qIvmInbpY8bs5I7A0jj2nWw-IgYFPy" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" 
                alt="CNC Automated Cutting Table" 
              />
              <div className="absolute top-3 right-3 bg-surface-container-lowest/90 backdrop-blur-md px-space-sm py-space-2xs rounded-md shadow-sm">
                <span className="font-caption-code text-caption-code font-bold text-on-surface">CUT-AUTO-05</span>
              </div>
              <div className="absolute bottom-3 left-3 bg-primary-container/85 backdrop-blur-md text-on-primary px-space-sm py-space-2xs rounded text-caption-code font-caption-code">
                قص آلي مبرمج CAD/CAM
              </div>
            </div>
            <div className="p-space-lg flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-on-surface-variant font-caption-code text-caption-code mb-space-2xs">
                  <span>تقطيع الشرائح الرقمي</span>
                  <span className="text-secondary font-bold">Gerber / Lectra</span>
                </div>
                <h4 className="font-title-lg text-title-lg font-bold text-on-surface mb-space-xs">طاولات التقطيع الأوتوماتيكية</h4>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  رؤوس قاطعة سريعة الحركة مزودة بشفط تفريغي يثبت طبقات النسيج بدقة 0.05 مم، لتسريع وتيرة إنتاج القمصان وتفادي إهدار الخامات.
                </p>
              </div>
              <div className="pt-space-md mt-space-md flex items-center justify-between text-caption-code font-caption-code bg-surface-container-low px-space-sm py-space-2xs rounded">
                <span className="text-on-surface-variant">القدرة القصوى:</span>
                <span className="font-bold text-on-surface" dir="ltr">Up to 70mm Ply Height</span>
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
            <div className="relative h-64 w-full overflow-hidden bg-surface-container">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAf_ne1Cvc4OFHVHZRIdgeJORHEMV55HLQYDnwOdb-bpPU1P5fmAFkhnR7HjAW5Z9c4hB3X1dXS0IZeP4gwRAzFNNa2PhgyFWJT8oSLYuXRDmBp2B-XtCWOelc5jEciwUYUqjq3KyS1mOGNv4ms6CoHVoTIVj4x_je_M9xGmPtYs-DE9HqYnLbbZHNA0hbDOu6mLj0FEdqh4WeCCDcf_1Si-fXWYI-PzCMqbJ2GZCxjdow-rbbmFybP" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" 
                alt="Industrial Multi-Head Embroidery Rig" 
              />
              <div className="absolute top-3 right-3 bg-surface-container-lowest/90 backdrop-blur-md px-space-sm py-space-2xs rounded-md shadow-sm">
                <span className="font-caption-code text-caption-code font-bold text-on-surface">EMB-MULTI-06</span>
              </div>
              <div className="absolute bottom-3 left-3 bg-primary-container/85 backdrop-blur-md text-on-primary px-space-sm py-space-2xs rounded text-caption-code font-caption-code">
                تطريز شعارات دقيق
              </div>
            </div>
            <div className="p-space-lg flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-on-surface-variant font-caption-code text-caption-code mb-space-2xs">
                  <span>ماكينات التطريز متعددة الرؤوس</span>
                  <span className="text-secondary font-bold">Tajima Industrial</span>
                </div>
                <h4 className="font-title-lg text-title-lg font-bold text-on-surface mb-space-xs">وحدات تطريز الشعارات والتفاصيل</h4>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  صفوف من رؤوس التطريز الميكانيكية ذات التوجيه الرقمي التي تنفذ أدق التصاميم والشعارات بدقة وتطابق تام عبر كامل دورة الإنتاج.
                </p>
              </div>
              <div className="pt-space-md mt-space-md flex items-center justify-between text-caption-code font-caption-code bg-surface-container-low px-space-sm py-space-2xs rounded">
                <span className="text-on-surface-variant">السرعة:</span>
                <span className="font-bold text-on-surface" dir="ltr">1,200 SPM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="w-full bg-surface-container-low py-space-2xl text-start">
        <div className="max-w-7xl mx-auto px-gutter-mobile lg:px-gutter-desktop">
          <div className="bg-surface-container-lowest p-space-xl lg:p-space-2xl rounded-xl shadow-sm flex flex-col lg:flex-row items-center justify-between gap-space-xl">
            <div className="flex flex-col items-start max-w-2xl">
              <div className="flex items-center gap-space-xs text-secondary font-caption-code text-caption-code font-bold mb-space-2xs">
                <ShieldCheck className="w-[18px] h-[18px]" />
                <span>اعتمادات ومواصفات الجودة التصديرية</span>
              </div>
              <h3 className="font-headline-lg text-headline-lg font-bold text-on-surface mb-space-xs">
                جاهزون لتلبية تعاقدات التوريد الكبرى للماركات العالمية
              </h3>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                منشآتنا في المنطقة الحرة الخاصة بالإسكندرية تتيح سهولة الشحن المباشر للموانئ الأوروبية والأمريكية مع إعفاءات جمركية وشهادات منشأ معتمدة، مدعومة بأكبر تجمع لماكينات الحياكة الدائرية في مصر.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-space-md shrink-0">
              <button 
                onClick={() => setPage?.('contact')}
                className="inline-flex items-center gap-space-xs px-space-xl py-space-md rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-inverse-surface transition-colors shadow-sm cursor-pointer"
              >
                <span>طلب مواصفة فنية وعينات</span>
                <ArrowLeft className="w-[18px] h-[18px]" />
              </button>
              <a className="inline-flex items-center gap-space-xs px-space-lg py-space-md rounded-lg bg-surface-container-high text-on-surface font-label-md text-label-md hover:bg-surface-container-highest transition-colors" href="mailto:inquiry@americanfreezone.com">
                <Mail className="w-[18px] h-[18px]" />
                <span>استفسار فني مباشر</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
