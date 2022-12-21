const url = {
  auth: {
    login: '/login',
    register: '/register',
    frogetPass: '/password/forget',
    resetPass: '/password/reset',
  },
}
export default url

const siteurl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export { siteurl }
