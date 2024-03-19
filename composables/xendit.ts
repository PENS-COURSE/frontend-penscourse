const integration = ref<string>("Redirect"); // Initial integration selection
const country = ref<string>(""); // Selected country
const displayedCartDetails = ref<any>(null); // Holds cart details for selected country
const invoiceUrl = ref<string>(""); // Invoice URL
const showModal = ref<boolean>(false); // Flag for modal visibility

const fetchCartData = async (country: string) => {
  // Replace with your actual logic to fetch cart data
  const response = await fetch(`/api/cart/${country}`);
  const data = await response.json();
  return data;
};

const setupIntegration = () => {
  invoiceUrl.value = ""; // Reset invoice URL on integration change
};

const setupCart = async () => {
  if (!country.value) return;
  displayedCartDetails.value = await fetchCartData(country.value);
};

const startDemo = async () => {
  if (!invoiceUrl.value) {
    const { currency, amount } = displayedCartDetails.value.cart.total;
    const invoiceData = {
      currency,
      amount,
      redirect_url: `${window.location.origin}/try-checkout`,
    };

    try {
      const response = await fetch("/api/invoice", {
        method: "POST",
        headers: { "Content-Type": "application/json;charset=utf-8" },
        body: JSON.stringify(invoiceData),
      });

      const data = await response.json();
      if (response.status >= 200 && response.status <= 299) {
        invoiceUrl.value = data.invoice_url;
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert(error);
    }
  }

  if (invoiceUrl.value) {
    switch (integration.value) {
      case "Dialog Pop-up":
        showModal.value = true;
        break;
      default:
        window.location.href = invoiceUrl.value;
        break;
    }
  }
};

const closeModal = () => {
  showModal.value = false;
};
