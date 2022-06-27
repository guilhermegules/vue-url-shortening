<template>
  <footer class="footer">
    <h2>Shortly</h2>
    <div>
      <h3>Features</h3>
      <p>Link Shortening</p>
      <p>Branded Links</p>
      <p>Analytics</p>
    </div>
    <div>
      <h3>Resources</h3>
      <p>Blob</p>
      <p>Developers</p>
      <p>Support</p>
    </div>
    <div>
      <h3>Company</h3>
      <p>About</p>
      <p>Our Team</p>
      <p>Careers</p>
      <p>Contact</p>
    </div>
    <div class="footer__icons">
      <img src="/images/icon-facebook.svg" alt="Facebook" />
      <img src="/images/icon-twitter.svg" alt="Twitter" />
      <img src="/images/icon-pinterest.svg" alt="Pinterest" />
      <img src="/images/icon-instagram.svg" alt="Instagram" />
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--neutral-dark-violet);
  display: grid;
  grid-template-columns: 2fr repeat(4, 1fr);
  gap: 30px;
  padding: 30px 50px;
  margin: 0 -50px;
}

h2,
h3 {
  color: var(--neutral-white);
}

p {
  color: var(--neutral-grayish-violet);
}

.footer__icons {
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  gap: 20px;
}
</style>
