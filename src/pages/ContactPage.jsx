import { useForm } from "react-hook-form";

const ContactPage = () => {
    const { register, formState:{errors}, handleSubmit } = useForm();

    const validation = {
      nombre: { required: '*Este campo es obligatorio'},
      email: { required: '*Este campo es obligatorio' },
      telefono: { required: '*Este campo es obligatorio',maxLength: 10 },
    }; 
     const onSubmit = (data) => {
        console.log(data);
    }
  
    return (
      <section className="contact-page">
        <form className="formulario" onSubmit={handleSubmit(onSubmit)}>
          <h1>Contacto</h1>
          {Object.keys(validation).map((fieldName) => (
            <div key={fieldName}>
              <input
                type={fieldName === 'email' ? 'email' : 'text'}
                placeholder={`Ingrese su ${fieldName}`}
                {...register(fieldName, validation[fieldName])}
              />
              {errors[fieldName] && (
                <h2 className="error-message">{errors[fieldName].message}</h2>
              )}
            </div>
          ))}
        <button className="button-cart" type="submit">Enviar</button>
        </form>
      </section>
    );
};
  
export default ContactPage;