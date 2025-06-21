
import style from "./SearchFilterBar.module.scss";
import LocationMap from "./LocationMap.jsx";
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  tarih: Yup.date().required("Tarih seçilmelidir"),
  person: Yup.string().required("Kişi sayısı seçilmelidir"),
  location: Yup.string().required("Lokasyon girilmelidir"),
});

const SearchFilterBar = () => {
  const [showMap, setShowMap] = useState(false);

  return (
    <Formik
      initialValues={{
        tarih: null,
        person: '',
        location: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log('Form verileri:', values);

        
        const veri = {
          tarih: values.tarih,
          person: values.person,
          location: values.location,
        };

        localStorage.setItem('RezervasyonBilgileri', JSON.stringify(veri));
        alert("Bilgiler kaydedildi!");
      }}
    >
      {({ values, setFieldValue }) => (
        <Form className={style.container}>
       
          <div className={style.left}>
            {/* Tarih */}
            <div className={style.wrapper}>
              <div className={style.check}>
                <img src="/images/SearchFilterBar/Frame.png" alt="" />
                <DatePicker
                  selected={values.tarih}
                  onChange={(val) => setFieldValue('tarih', val)}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Check Available"
                  isClearable
                  minDate={new Date(new Date().setDate(new Date().getDate() + 1))}
                  style={{ cursor: 'pointer' }}
                />
              </div>
              <div className={style.errors}>
                <ErrorMessage name="tarih" component="div" className={style.error} />
              </div>
            </div>

            {/* Kişi Sayısı */}
            <div className={style.wrapper}>
              <div className={style.center}>
                <img src="/images/SearchFilterBar/person.png" alt="" />
                <Field as="select" name="person" className={style.person}>
                  <option value="">Select person</option>
                  <option value="1">1 person</option>
                  <option value="2">2 person</option>
                </Field>
              </div>
              <div className={style.errors}>
                <ErrorMessage name="person" component="div" className={style.error} />
              </div>
            </div>

            {/* Lokasyon */}
            <div className={style.wrapper}>
              <div className={style.select}>
                <img src="/images/SearchFilterBar/location.png" alt="" />
                <Field
                  type="text"
                  name="location"
                  placeholder="Selection Location"
                  className={style.locationInput}
                  readOnly
                  onClick={() => setShowMap((prev) => !prev)}
                  style={{ cursor: 'pointer' }}
                />
              </div>
              <div className={style.errors}>
                <ErrorMessage name="location" component="div" className={style.error} />
              </div>
              <div className={style.location}>
              {showMap && <LocationMap setFieldValue={setFieldValue} />}
              </div>
            </div>
          </div>

          {/* Buton */}
          <div className={style.right}>
            <button type="submit">Search</button>
          </div>
          
        </Form>
      )}
    </Formik>
  );
};

export default SearchFilterBar;

