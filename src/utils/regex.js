/* eslint-disable max-len */

/**
 * Password condition
 * - Min 8 character
 * - Max 16 character
 * - At least one lowercase letter
 * - At least one uppercase letter
 * - At least one number
 */

export default {
  email: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,16}$/
}