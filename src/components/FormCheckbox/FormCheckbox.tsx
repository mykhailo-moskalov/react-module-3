export default function FormChekbox() {
  const handleOrder = (formData: FormData) => {
    const restrictions = formData.getAll("restrictions") as string[];
    if (restrictions.length === 1) {
      console.log("Dietary restriction:", restrictions[0]);
    } else {
      console.log("Dietary restrictions:", restrictions);
    }
  };

  return (
    <form action={handleOrder}>
      <fieldset>
        <legend>Dietary restrictions:</legend>
        <label>
          <input type="checkbox" name="restrictions" value="vegan" />
          Vegan
        </label>
        <label>
          <input type="checkbox" name="restrictions" value="gluten-free" />
          Gluten-free
        </label>
        <label>
          <input type="checkbox" name="restrictions" value="nut-free" />
          Nut-free
        </label>
      </fieldset>

      <button type="submit">Submit</button>
    </form>
  );
}
