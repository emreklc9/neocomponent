import React from 'react';
import './Calendar.css';
export interface CalendarProps {
    /**
     * Seçili tarih
     */
    selectedDate?: Date;
    /**
     * Tarih seçildiğinde çağrılacak callback
     */
    onDateSelect?: (date: Date) => void;
    /**
     * Minimum seçilebilir tarih
     */
    minDate?: Date;
    /**
     * Maximum seçilebilir tarih
     */
    maxDate?: Date;
    /**
     * Takvim görünümü (month, week, day)
     */
    view?: 'month' | 'week' | 'day';
    /**
     * Başlangıç hafta günü (0 = Pazar, 1 = Pazartesi)
     */
    weekStartsOn?: 0 | 1;
    /**
     * Özel CSS sınıfı
     */
    className?: string;
}
export declare const Calendar: React.FC<CalendarProps>;
export default Calendar;
//# sourceMappingURL=Calendar.d.ts.map