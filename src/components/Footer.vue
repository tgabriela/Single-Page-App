<template>
  <div class="footer">
      <div class="footer-container">
          <div class="text-footer">
              <strong>{{ new Date().getFullYear() }}</strong>
              <strong> @ sweetcorner.ro</strong>
          </div>
      </div>
  </div>
</template>


<style>
.footer {
    background-color: #333;
    color: #fff;
    padding: 30px 0;
  }
.footer-container {
  align-items: center;
  text-align: center;
  max-width: 100%;
  background-size: cover;
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 10px 20px;
}
.text-footer {
  font-size: 15px;
  color: white;
  max-width: 100%;
  margin: 0;
}
</style>