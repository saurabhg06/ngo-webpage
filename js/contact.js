const supabaseUrl = "https://clybwmllnsyjvmtrmbwe.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNseWJ3bWxsbnN5anZtdHJtYndlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY0NzA4MDUsImV4cCI6MjA4MjA0NjgwNX0.FZHpPv_MZoAkm_vL_ozlglr-8k0dhbf7hI9M8TeoJfU";

const supabase = window.supabase.createClient(
    supabaseUrl,
    supabaseKey
);

document.getElementById("contactForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const { error } = await supabase
        .from("contact_messages")
        .insert([{ name, email, message }]);

    if (error) {
        alert("Error sending message");
        console.error(error);
    } else {
        alert("Message sent successfully!");
        document.getElementById("contactForm").reset();
    }
});
