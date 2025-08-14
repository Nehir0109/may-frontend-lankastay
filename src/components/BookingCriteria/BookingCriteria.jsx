import { useState, useEffect } from 'react';
import styles from './BookingCriteria.module.scss';

const BookingCriteria = ({ pricePerNight }) => {
  const [duration, setDuration] = useState(1);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);

  // 1. Tarihler değişince duration'ı güncelle
  useEffect(() => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const diffDays = (end - start) / (1000 * 60 * 60 * 24);
      if (diffDays > 0) setDuration(diffDays);
    }
  }, [startDate, endDate]);

  // 2. Süre değişince endDate'i güncelle (startDate'e göre)
  useEffect(() => {
    if (startDate) {
      const start = new Date(startDate);
      start.setDate(start.getDate() + duration);
      const newEndDate = start.toISOString().split('T')[0];
      setEndDate(newEndDate);
    }
  }, [duration, startDate]); // startDate'i dependency'e eklemek daha güvenli

  // 3. Tarihler seçildiyse takvimi kapat
  useEffect(() => {
    if (startDate && endDate) {
      setShowDatePicker(false);
    }
  }, [startDate, endDate]);

  const handleIncrement = () => setDuration((prev) => Math.min(prev + 1, 30));
  const handleDecrement = () => setDuration((prev) => (prev > 1 ? prev - 1 : 1));

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const options = { day: '2-digit', month: 'short' };
    return new Date(dateStr).toLocaleDateString('en-US', options);
  };

  return (
    <div className={styles.bookingCriteria}>
      {/* Süre Seçimi */}
      <div className={styles.durationPart}>
        <label className={styles.label}>How long will you stay?</label>
        <div className={styles.durationControl}>
          <button className={styles.btnMinus} onClick={handleDecrement}>-</button>
          <span className={styles.durationText}>
            {duration} Night{duration > 1 ? 's' : ''}
          </span>
          <button className={styles.btnPlus} onClick={handleIncrement}>+</button>
        </div>
      </div>

      {/* Tarih Seçimi */}
      <div className={styles.datePart}>
        <label className={styles.label}>Pick a Date</label>
        <div
          className={styles.dateDisplay}
          onClick={() => setShowDatePicker(!showDatePicker)}
        >
          <div className={styles.calendarWrapper}>
            <img src="/icons/calendar.svg" alt="calendar" className={styles.calendarIcon} />
          </div>
          <span className={styles.dateText}>
            {startDate && endDate
              ? `${formatDate(startDate)} - ${formatDate(endDate)}`
              : 'Select dates'}
          </span>
        </div>

        {showDatePicker && (
          <div className={styles.dateInputs}>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              min={new Date().toISOString().split('T')[0]}
            />
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              min={startDate || new Date().toISOString().split('T')[0]}
            />
          </div>
        )}
      </div>

      {/* Ücret Bilgisi */}
      <div className={styles.priceInfo}>
        <span>You will pay: </span>
        <span className={styles.price}>
          ${pricePerNight * duration || 0} USD
        </span>
        <br />
        <span>per </span>
        <span className={styles.price}>
          {duration} Night{duration > 1 ? 's' : ''}
        </span>
      </div>
    </div>
  );
};

export default BookingCriteria;
