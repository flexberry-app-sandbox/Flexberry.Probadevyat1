﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Probadevyat
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Комната.
    /// </summary>
    // *** Start programmer edit section *** (Комната CustomAttributes)

    // *** End programmer edit section *** (Комната CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("КомнатаE", new string[] {
            "НомерКомнаты as \'Номер комнаты\'",
            "Этаж as \'Этаж\'",
            "КоличествоМест as \'Количество мест\'"})]
    [View("КомнатаL", new string[] {
            "НомерКомнаты as \'Номер комнаты\'",
            "Этаж as \'Этаж\'",
            "КоличествоМест as \'Количество мест\'"})]
    public class Комната : ICSSoft.STORMNET.DataObject
    {
        
        private int fНомерКомнаты;
        
        private int fЭтаж;
        
        private int fКоличествоМест;
        
        // *** Start programmer edit section *** (Комната CustomMembers)

        // *** End programmer edit section *** (Комната CustomMembers)

        
        /// <summary>
        /// КоличествоМест.
        /// </summary>
        // *** Start programmer edit section *** (Комната.КоличествоМест CustomAttributes)

        // *** End programmer edit section *** (Комната.КоличествоМест CustomAttributes)
        public virtual int КоличествоМест
        {
            get
            {
                // *** Start programmer edit section *** (Комната.КоличествоМест Get start)

                // *** End programmer edit section *** (Комната.КоличествоМест Get start)
                int result = this.fКоличествоМест;
                // *** Start programmer edit section *** (Комната.КоличествоМест Get end)

                // *** End programmer edit section *** (Комната.КоличествоМест Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Комната.КоличествоМест Set start)

                // *** End programmer edit section *** (Комната.КоличествоМест Set start)
                this.fКоличествоМест = value;
                // *** Start programmer edit section *** (Комната.КоличествоМест Set end)

                // *** End programmer edit section *** (Комната.КоличествоМест Set end)
            }
        }
        
        /// <summary>
        /// НомерКомнаты.
        /// </summary>
        // *** Start programmer edit section *** (Комната.НомерКомнаты CustomAttributes)

        // *** End programmer edit section *** (Комната.НомерКомнаты CustomAttributes)
        public virtual int НомерКомнаты
        {
            get
            {
                // *** Start programmer edit section *** (Комната.НомерКомнаты Get start)

                // *** End programmer edit section *** (Комната.НомерКомнаты Get start)
                int result = this.fНомерКомнаты;
                // *** Start programmer edit section *** (Комната.НомерКомнаты Get end)

                // *** End programmer edit section *** (Комната.НомерКомнаты Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Комната.НомерКомнаты Set start)

                // *** End programmer edit section *** (Комната.НомерКомнаты Set start)
                this.fНомерКомнаты = value;
                // *** Start programmer edit section *** (Комната.НомерКомнаты Set end)

                // *** End programmer edit section *** (Комната.НомерКомнаты Set end)
            }
        }
        
        /// <summary>
        /// Этаж.
        /// </summary>
        // *** Start programmer edit section *** (Комната.Этаж CustomAttributes)

        // *** End programmer edit section *** (Комната.Этаж CustomAttributes)
        public virtual int Этаж
        {
            get
            {
                // *** Start programmer edit section *** (Комната.Этаж Get start)

                // *** End programmer edit section *** (Комната.Этаж Get start)
                int result = this.fЭтаж;
                // *** Start programmer edit section *** (Комната.Этаж Get end)

                // *** End programmer edit section *** (Комната.Этаж Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Комната.Этаж Set start)

                // *** End programmer edit section *** (Комната.Этаж Set start)
                this.fЭтаж = value;
                // *** Start programmer edit section *** (Комната.Этаж Set end)

                // *** End programmer edit section *** (Комната.Этаж Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "КомнатаE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View КомнатаE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("КомнатаE", typeof(IIS.Probadevyat.Комната));
                }
            }
            
            /// <summary>
            /// "КомнатаL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View КомнатаL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("КомнатаL", typeof(IIS.Probadevyat.Комната));
                }
            }
        }
    }
}
