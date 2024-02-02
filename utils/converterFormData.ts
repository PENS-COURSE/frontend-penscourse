export default function converterFormData(
  payload: Record<string, any>
): FormData {
  let formData = new FormData();
  Object.keys(payload).forEach((key: any) => {
    if (payload[key] !== undefined) {
      console.log(key, payload[key]);
      formData.append(key, payload[key]);
    }
  });

  return formData;
}
