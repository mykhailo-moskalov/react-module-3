export default function FormRadio() {
  const handleOrder = (formData: FormData) => {
    const delivery = formData.get("delivery") as string;
    console.log("Delivery:", delivery);
  };

  return (
    <form action={handleOrder}>
      <fieldset>
        <legend>Delivery method:</legend>

        <label>
          <input type="radio" name="delivery" value="pickup" defaultChecked />
          Pickup
        </label>
        <label>
          <input type="radio" name="delivery" value="courier" />
          Courier
        </label>
        <label>
          <input type="radio" name="delivery" value="drone" />
          Drone delivery
        </label>
      </fieldset>

      <button type="submit">Place order</button>
    </form>
  );
}
