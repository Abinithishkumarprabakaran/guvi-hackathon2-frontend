import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { API } from "../global.js"

const formValidationSchema = yup.object({
    name: yup
            .string()
            .required(),
    poster: yup
            .string()
            .required()
            .min(4).url(),
    rating: yup
            .number()
            .required()
            .min(0)
            .max(10),
    summary: yup
            .string()
            .required()
            .min(20),
    trailer: yup
            .string()
            .required()
            .min(4)
            .url(),
  })

export function Addmovie() {

    const {handleSubmit,handleChange,handleBlur,values,errors,touched} = useFormik({
        initialValues: { 
            name: '', 
            poster: '',
            rating: '',
            summary: '',
            trailer: '' },
        validationSchema: formValidationSchema,
        onSubmit: (newMovie) => {
            // console.log("Form Values", newMovie)
            addMovie(newMovie)
        }
      });

    const navigate = useNavigate();

    const addMovie = async (newMovie) => {
    
        await fetch(`${API}/movies`, {
            method: "POST",
            body: JSON.stringify(newMovie),
            headers: {
                "Content-Type": "application/json",
            },
        });

        navigate("/movies")
    };

    return (
    <form className="add-movie-form" onSubmit={handleSubmit}>
        <TextField
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            label="Name"
            variant="outlined"
            error={errors.name && touched.name}
            helperText={errors.name && touched.name ? errors.name: null}
            />
        {/* {errors.name && touched.name ? errors.name: null} */}

        <TextField
            name="poster"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.poster}
            label="Poster"
            variant="outlined"
            error={errors.poster && touched.poster}
            helperText={errors.poster && touched.poster ? errors.poster: null}
            />
        {/* {errors.poster && touched.poster ? errors.poster: null} */}
        <TextField
            name="rating"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.rating}
            label="Rating"
            variant="outlined"
            error={errors.rating && touched.rating}
            helperText={errors.rating && touched.rating ? errors.rating: null}
            />
        {/* {errors.rating && touched.rating ? errors.rating: null} */}
        <TextField
            name="summary"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.summary}
            label="Summary"
            variant="outlined"
            error={errors.summary && touched.summary}
            helperText={errors.summary && touched.summary ? errors.summary: null}
            />
        {/* {errors.summary && touched.summary ? errors.summary: null} */}
        <TextField
            name="trailer"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.trailer}
            label="Trailer"
            variant="outlined"
            error={errors.trailer && touched.trailer}
            helperText={errors.trailer && touched.trailer ? errors.trailer: null}
            />
        {/* {errors.trailer && touched.trailer ? errors.trailer: null} */}

        <Button type="submit" variant="contained">
            Add Movie
        </Button>
    </form>
    );
}