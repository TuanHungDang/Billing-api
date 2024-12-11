import { authenticate, PREMIUM_PLAN, BASIC_PLAN } from "../shopify.server";
import { redirect } from "@remix-run/node";

export const loader = async ({ request }) => {
  try {
    const { billing } = await authenticate.admin(request);

    const billingResult = await billing.require({
      plans: [PREMIUM_PLAN, BASIC_PLAN],
      onFailure: async () => billing.request({
        plan: PREMIUM_PLAN,
        test: true,
        returnUrl: 'https://admin.shopify.com/store/hungstore-vn/apps/billing-user/billing-page',
      }),
    });

    console.log('Billing Result:', billingResult);

    // App logic

    // Chuyển hướng đến trang index
    return redirect('../');
  } catch (error) {
    console.error('Loader Error:', error);
    // Chuyển hướng đến trang index ngay cả khi có lỗi
    return redirect('./app');
  }
};
