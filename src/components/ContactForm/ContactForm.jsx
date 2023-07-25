import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './ContactForm.css';
import * as emailjs from 'emailjs-com';
import { makeStyles } from '@material-ui/core/styles';
import { animateScroll as scroll } from 'react-scroll';


const useStyles = makeStyles((theme) => ({
	button: {
		margin: theme.spacing(1),
		width: '10em',
		alignSelf: 'center',
	},
	email: {
		margin: '.5em',
		width: '450px',
	},
}));

const ContactUsForm = () => {
	const [form, setForm] = useState({
		from_name: '',
		from_email: '',
		message: '',
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setForm({
			...form,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		let templateParams = {
			from_name: from_name,
			from_email: from_email,
			to_name: '',
			message: message,
		};
		emailjs
			.send(
				'default_service',
				'template_jypx5jd',
				templateParams,
				'user_XbttVRwV3C2qP5kSwSsmS'
			)
			.then(handleSent());
	};

    const handleSent = () => {
        setForm({
            from_name: '',
            from_email: '',
            message: '',
        });
        scroll.scrollToTop();
				console.log(form);
    };

	const renderError = () => {
		const toggleForm = form.isError ? 'danger' : '';
		if (form.isError) {
			return (
				<Button type='submit' 
								className={toggleForm} 
								variant='contained'>
					{form.errorMsg}
				</Button>
			);
		} else {
			return (
				<Button type='submit' 
								className='CU-button' 
								id='submit-button' 
								variant='outlined' >
					Submit
				</Button>
			);
		}
	};

	const { from_name, from_email, message } = form;

	return (
		<div className='CU-div'>
			<form className='CU-form' onSubmit={handleSubmit}>
				<TextField
					required
					onChange={handleChange}
					name='from_name'
					value={from_name}
					className='textfield'
					label='Name'
					variant='outlined'
					type='text'
				/>
				<TextField
					required
					onChange={handleChange}
					name='from_email'
					value={from_email}
					className='textfield'
					label='E-mail'
					variant='outlined'
					type='text'
				/>
				<TextField
					required
					multiline
					onChange={handleChange}
					name='message'
					value={message}
					className='textfield'
					label='Message'
					minRows={6}
					variant='outlined'
				/>
				{renderError()}
			</form>
		</div>
	);
};

export default ContactUsForm;
