import { useState, useEffect } from 'react';
import styles from './BookingCriteria.module.scss';

const BookingCriteria = ({ pricePerNight, onCriteriaChange }) => {
    const [duration, setDuration] = useState(1);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [showDatePicker, setShowDatePicker] = useState(false);

    useEffect(() => {
        if (startDate && endDate) {
            const start = new Date(startDate);
            const end = new Date(endDate);
            const diffTime = end - start;
            const diffDays = diffTime / (1000 * 60 * 60 * 24);
            if (diffDays > 0) setDuration(diffDays);
        }
    }, [startDate, endDate]);

    useEffect(() => {
        if (startDate) {
            const start = new Date(startDate);
            start.setDate(start.getDate() + duration);
            const newEndDate = start.toISOString().split('T')[0];
            setEndDate(newEndDate);
        }
    }, [duration]);

    useEffect(() => {
        onCriteriaChange && onCriteriaChange({ duration, startDate, endDate });
    }, [duration, startDate, endDate, onCriteriaChange]);

    useEffect(() => {
    if (startDate && endDate) {
        setShowDatePicker(false);
    }
    }, [startDate, endDate]);


    const handleIncrement = () => setDuration((d) => Math.min(d + 1, 30));
    const handleDecrement = () => setDuration((d) => (d > 1 ? d - 1 : 1));

    const formatDate = (dateStr) => {
        if (!dateStr) return '';
        const options = { day: '2-digit', month: 'short' };
        return new Date(dateStr).toLocaleDateString('en-US', options);
    };

    return (
        <div className={styles.bookingCriteria}>
            {/* Duration */}
            <div className={styles.durationPart}>
                <label className={styles.label}>How long you will stay?</label>
                <div className={styles.durationControl}>
                    <button className={styles.btnMinus} onClick={handleDecrement}>-</button>
                    <span className={styles.durationText}>
                        {duration} Night{duration > 1 ? 's' : ''}
                    </span>
                    <button className={styles.btnPlus} onClick={handleIncrement}>+</button>
                </div>
            </div>

            {/* Date */}
            <div className={styles.datePart}>
                <label className={styles.label}>Pick a Date</label>
                <div className={styles.dateDisplay} onClick={() => setShowDatePicker(!showDatePicker)}>
                    <img src="/icons/calendar.svg" alt="calendar" className={styles.calendarIcon} />
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

            {/* Price */}
            <div className={styles.priceInfo}>
                <span>You will pay: </span>
                <span className={styles.price}>${pricePerNight * duration || 0} USD</span>
                <span> per {duration} Night{duration > 1 ? 's' : ''}</span>
            </div>
        </div>
    );
};

export default BookingCriteria;
