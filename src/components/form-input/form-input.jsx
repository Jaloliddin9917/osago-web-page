// import './form-input.style.scss';
// // import { useForm }  from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";

// const schema = yup.object().shape({
//   name: yup.string().required(),
//   country: yup.string().required(),
//   logo: yup.string().required(),
//   slogan: yup.string().required(),
//   head_quaters: yup.string().required(),
//   website: yup.string().required(),
//   established: yup.number().positive().integer().required(),
// })

// const FormInput = ({ label, ...otherProps }) => {
//   const { register, handleSubmit, errors} = useForm();
//   return (
//     <div className='group'>
//       <input className='form-input' {...otherProps} />
//       {label && (
//         <label
//           className={`${
//             otherProps.value.length ? 'shrink' : ''
//           } form-input-label`}
//         >
//           {label}
//         </label>
//       )}
//     </div>
//   );
// };

// export default FormInput;