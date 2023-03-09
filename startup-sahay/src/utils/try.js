export const authLogin = async (form) => {
    try {
    //   console.log({ addBillingDetails: form });
      const response = await fetch(
        " http://localhost:3004/users/login",
        {
          method: "POST",
          body: JSON.stringify(form),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      return response.json();
    } catch (error) {
      console.log(error);
    }
  };
  