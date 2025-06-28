
import style from "./SearchFilterBar.module.scss";
import LocationMap from "./LocationMap.jsx";
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from "../ui/Button/Button.jsx";

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
        <Form className={style.Container}>
          <div className={style.container}>
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
                    placeholder="Select Location"
                    className={style.locationInput}
                    readOnly
                    onClick={() => setShowMap(true)}
                  />
                </div>
                <div className={style.errors}>
                  <ErrorMessage name="location" component="div" className={style.error} />
                </div>
              </div>
            </div>

            {/* Buton */}
            <div className={style.right}>
              <Button type="submit">Tıklayınız</Button>
            </div>
          </div>

          {/* Modal Harita */}
          {showMap && (
            <div className={style.modalOverlay}>
              <div className={style.modalContent}>
                <button className={style.closeBtn} onClick={() => setShowMap(false)}>×</button>
                <LocationMap
                  setFieldValue={setFieldValue}
                  onClose={() => setShowMap(false)}
                />
              </div>
            </div>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default SearchFilterBar;
