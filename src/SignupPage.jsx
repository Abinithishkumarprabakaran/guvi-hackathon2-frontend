import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { API } from "./global.js"

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

export function SignupPage() {

    const {handleSubmit,handleChange,handleBlur,values,errors,touched} = useFormik({
        initialValues: { 
            email: '', 
            password },
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
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            label="Email"
            variant="outlined"
            error={errors.name && touched.name}
            helperText={errors.name && touched.name ? errors.name: null}
            />
        {/* {errors.name && touched.name ? errors.name: null} */}

        <TextField
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.poster}
            label="Password"
            variant="outlined"
            error={errors.poster && touched.poster}
            helperText={errors.poster && touched.poster ? errors.poster: null}
            />
        {/* {errors.poster && touched.poster ? errors.poster: null} */}

        <Button type="submit" variant="contained">
            Add Movie
        </Button>
    </form>
    );
}
