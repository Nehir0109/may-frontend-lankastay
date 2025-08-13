import { useEffect, useState } from 'react';
import { useParams, NavLink } from 'react-router';
import styles from './Booking.module.scss';
import logo from "@/assets/logo.svg";
import StepIndicator from "../../components/StepIndicator/StepIndicator.jsx";
import BookingCriteria from "../../components/BookingCriteria/BookingCriteria.jsx";
import Button from '../../components/ui/Button/Button.jsx';

function BookingPage() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        // ID parametresine göre veri çekme
        fetch(`https://6829efb0ab2b5004cb3543e3.mockapi.io/api/v1/hotels/${id}`)
            .then((response) => response.json())
            .then((data) => setProduct(data));
    }, [id]);

    if (!product) return <p>Loading...</p>;

    return (
        <>
            <header className={styles.Header}>
                <div className={styles.logo}>
                    <NavLink to="/"><img src={logo} alt="Logo" /></NavLink>
                </div>
            </header>

            <body>
                <div className={styles.BookingContainer}>
                    <>
                        <StepIndicator currentStep="booking" />
                    </>

                    <div className={styles.TitlePart}>
                        <h1 className={styles.Title}>Booking Information</h1> <br />
                        <p className={styles.Text}>Please fill up the blank fields below</p>
                    </div>

                    <div className={styles.BookingContent}>
                        {/* Sol taraf: Otel görseli ve bilgileri */}
                        <div className={styles.HotelInfo}>
                            <div className={styles.HotelImage}>
                                <img
                                src={product.coverImage}
                                alt={product.name}
                                />
                            </div>

                            <div className={styles.HotelTitle}>
                                <h3 className={styles.HotelName}>{product.name}</h3>
                                <p className={styles.HotelLocation}>{product.city}, {product.country}</p>
                            </div>
                        </div>

                        <div className={styles.Divider}></div>

                        {/* Sağ taraf: Booking Criteria */}
                        <>
                            <BookingCriteria pricePerNight={product.price}/>
                        </>
                    </div>

                    <div className={styles.BookingButtons}>
                        <Button className={styles.BookBtn}>
                            <NavLink to="/payment">Book Now</NavLink>
                        </Button>
                        
                        <Button className={styles.CancelBtn}>
                            <NavLink to="/">Cancel</NavLink>
                        </Button>
                    </div>
                </div>
            </body>
        </>
    );
}

export default BookingPage;