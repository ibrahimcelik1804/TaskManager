import * as Yup from 'yup';

export const taskSchema = Yup.object().shape({
  title: Yup.string().required('Zorunlu Alan'),
  description: Yup.string().required('Zorunlu Alan'),
  startDate: Yup.date().required('Zorunlu Alan'),
  endDate: Yup.date()
    .required('Zorunlu Alan')
    .min(Yup.ref('startDate'), 'Bitiş tarihi, başlangıç tarihinden önce olmaz!'),
});
