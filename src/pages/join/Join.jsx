import { useState } from "react";
import styles from '../join/Join.module.css';
import HeaderNav from "../../components/navbar/Navbar";
import Footer from '../../components/footer/Footer'

const Join = () => {
    const [formData, setFormData] = useState({ name: "", email: "", password: "" });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");

    const validateForm = () => {
        let errors = {};
        const nameRegex = /^[a-zA-Z\s]+$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@+`'-¡ç´¡$!%*?&#.$($)$-$_]{8,16}$/;
        const trimmedPassword = formData.password.trim();

        console.log("Validating password:", trimmedPassword);  // pass?

       
        if (!formData.name.trim()) {
            errors.name = "⚠ Name is required.";
        } else if (!nameRegex.test(formData.name.trim())) {
            errors.name = "⚠ Only letters are allowed.";
        }

       
        if (!formData.email.trim()) {
            errors.email = "⚠ Email is required.";
        } else if (!emailRegex.test(formData.email.trim())) {
            errors.email = "⚠ Enter a valid email address.";
        }

        
        if (!trimmedPassword) {
            errors.password = "⚠ Password is required.";
        } else if (!passwordRegex.test(trimmedPassword)) {
            console.log("Password regex failed for:", trimmedPassword);  // error?
            errors.password = "⚠ Password must be at least 8 characters, include one uppercase letter, one lowercase letter, one number, and one symbol.";
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("✅ Form Submitted Successfully!");
            console.log("👤 Name:", formData.name);
            console.log("📧 Email:", formData.email);
            console.log("🔒 Password:", formData.password);
            setSuccessMessage("🎉 Form submitted successfully!");
            setFormData({ name: "", email: "", password: "" });
            setErrors({});
            setTimeout(() => setSuccessMessage(""), 9000); // Clear message 
        } else {
            setSuccessMessage("");
        }
    };

    return (
        <>
        <HeaderNav/>
        <div className={styles.Join}>
            <div className={styles.backgroundCircles}></div>
            <main className={styles.JoinMain}>
                <div className={styles.textSection}>
                    <h1>Join the <span className={styles.highlight}>fun.</span></h1>
                </div>
                <form onSubmit={handleSubmit} className={styles.formSection}>
                    <label><b>Name:</b>
                        <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </label>
                    {errors.name && <p className={styles.errorMessage}>{errors.name}</p>}

                    <label><b>Email:</b>
                        <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </label>
                    {errors.email && <p className={styles.errorMessage}>{errors.email}</p>}

                    <label><b>Password:</b>
                        <input
                            type="password"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        />
                    </label>
                    {errors.password && <p className={styles.errorMessage}>{errors.password}</p>}

                    <button type="submit">Join Now</button>
                    {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
                </form>
            </main>
        </div>
        <Footer/>
        </>
    );
};

export default Join;



