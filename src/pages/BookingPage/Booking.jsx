import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import BookingCriteria from "../../components/BookingCriteria/BookingCriteria.jsx";

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
<div>
<BookingCriteria pricePerNight={product.price}/>
</div>
);
}

export default BookingPage;