# AngularJS CRUD Application

A simple CRUD application using AngularJS and Bootstrap.

### Prerequisites

You must have Node.js and its package manager (npm) installed. You can get them from [here][node].

### Install Dependencies

To install all dependencies:

```
npm install
```

### Run the Application

To start server:

```
npm start
```

Then, open a browser to http://localhost:8000

### Backend Server

This project implements requests to this Vert.x REST API (https://github.com/tiagorgt/vertx-rest-api.git)

<p>Create/update order and calculate total and taxes on aloha.</p>
<h3>Request</h3>
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Type</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <b>mock</b>
            </td>
            <td>
                Mock provider responses. If
                <code>true</code> it will not request aloha services. It's possible to get pre-defined standard errors
                changing total price.
            </td>
            <td>
                boolean
            </td>
        </tr>
        <tr>
            <td>
                <b>id</b>
            </td>
            <td>
                Database order id. Required to update an existing order.
            </td>
            <td>
                string
            </td>
        </tr>
        <tr>
            <td>
                <b>date</b>
            </td>
            <td>
                Order date <code>YYYY-MM-DD</code>. Required to update an existing order.
            </td>
            <td>
                string
            </td>
        </tr>
        <tr>
            <td>
                <b>orderId</b>
            </td>
            <td>
                Aloha order id. Required to update an existing order.
            </td>
            <td>
                string | number
            </td>
        </tr>
        <tr>
            <td>
                <b>beaconNumber</b>
            </td>
            <td>
                Beacon number to put on the order. If sent, beacon number will be used as the order
                number.
            </td>
            <td>
                number | string
            </td>
        </tr>
        <tr>
            <td>
                <b>total</b>
            </td>
            <td>
                Order total price. When <code>mock: true</code> the following prices will return default responses:
                <ul>
                    <li><code>total >= 110 && total < 120</code>: Provider default error structure.</li>
                    <li><code>total >= 120 && total < 120</code>: Timeout error HTTP 408.</li>
                    <li><code>total >= 210 && total < 220</code>: Provider response with failed items. </li>
                    <li><code>total >= 220 && total < 230</code>: Change products and order total price.</li>
                    <li><code>otherwise</code>: Success response.</li>
                </ul>
            </td>
            <td>
                number
            </td>
        </tr>
        <tr>
            <td>
                <b>settings</b>
            </td>
            <td>
                Object with settings data.
            </td>
            <td>
                object
            </td>
        </tr>
        <tr>
            <td>
                settings &#8594; <b>providerType</b>
            </td>
            <td>
                Point of Sale (POS) provider.
            </td>
            <td>
                string: <code>aloha</code>
            </td>
        </tr>
        <tr>
            <td>
                settings &#8594; <b>placeOrderIndividualItems</b>
            </td>
            <td>
                Send products to aloha individually. For example: if product with <code>quantity: 3</code> is sent, then
                it will be splitted in 3 items with <code>quantity: 1</code> on aloha order.
            </td>
            <td>
                boolean
            </td>
        </tr>
        <tr>
            <td>
                settings &#8594; <b>authBasicToken</b>
            </td>
            <td>
                Basic token to connect to aloha.
            </td>
            <td>
                string
            </td>
        </tr>
        <tr>
            <td>
                settings &#8594; <b>endpoint</b>
            </td>
            <td>
                Base URL to aloha.
            </td>
            <td>
                string
            </td>
        </tr>
        <tr>
            <td>
                settings &#8594; <b>companyCode</b>
            </td>
            <td>
                Company code on aloha.
            </td>
            <td>
                string
            </td>
        </tr>
        <tr>
            <td>
                settings &#8594; <b>menuId</b>
            </td>
            <td>
                Menu id on aloha.
            </td>
            <td>
                string | number
            </td>
        </tr>
        <tr>
            <td>
                settings &#8594; <b>promiseDataTime</b>
            </td>
            <td>
                Date used to order on aloha. Required to update an existing order.
            </td>
            <td>
                string
            </td>
        </tr>
        <tr>
            <td>
                <b>kiosk</b>
            </td>
            <td>
                Object with kiosk data.
            </td>
            <td>
                object
            </td>
        </tr>
        <tr>
            <td>
                kiosk &#8594; <b>headers</b> 
            </td>
            <td>
                Extra HTTP headers to put on aloha requests. For example:
                <code>{ "X-Api-Channel": "Kiosk Supersonic" }</code>
            </td>
            <td>
                object
            </td>
        </tr>
        <tr>
            <td>
                kiosk &#8594; <b>organisation</b>
            </td>
            <td>
                Organisation name. For example: <code>HJ</code>, <code>YUMAUKFC</code>, <code>AMERICANAKFC</code>.
            </td>
            <td>
                string
            </td>
        </tr>
        <tr>
            <td>
                kiosk &#8594; <b>storeId</b>
            </td>
            <td>
                Store id on aloha.
            </td>
            <td>
                string | number
            </td>
        </tr>
        <tr>
            <td>
                kiosk &#8594; <b>storeFirestoreId</b>
            </td>
            <td>
                Store id on firestore. This id will be used to build the path to save the order on firestore.
            </td>
            <td>
                string
            </td>
        </tr>
        <tr>
            <td>
                kiosk &#8594; <b>deviceFirestoreId</b>
            </td>
            <td>
                Device id on firestore. This id will be used to build the path to save the order on firestore.
            </td>
            <td>
                string
            </td>
        </tr>
        <tr>
            <td>
                kiosk &#8594; <b>organisationFirestoreId</b>
            </td>
            <td>
                Organisation id on firestore. This id will be used to build the path to save the order on firestore.
            </td>
            <td>
                string
            </td>
        </tr>
        <tr>
            <td>
                kiosk &#8594; <b>serial</b>
            </td>
            <td>
                Kiosk serial.
            </td>
            <td>
                string
            </td>
        </tr>
        <tr>
            <td>
                kiosk &#8594; <b>localtime</b>
            </td>
            <td>
                Current kiosk UTC date and time <code>YYYY-MM-DDTHH:mm:ssZ</code>.
            </td>
            <td>
                string
            </td>
        </tr>
        <tr>
            <td>
                kiosk &#8594; <b>timezone</b>
            </td>
            <td>
                Kiosk timezone name or abbreviation. For example: <code>Pacific/Auckland</code> or <code>NZST</code>.
            </td>
            <td>
                string
            </td>
        </tr>
        <tr>
            <td>
                kiosk &#8594; <b>site</b>
            </td>
            <td>
                Object with site data. Only for receipt.
            </td>
            <td>
                object
            </td>
        </tr>
        <tr>
            <td>
                kiosk &#8594; site &#8594; <b>name</b>
            </td>
            <td>
                Site name.
            </td>
            <td>
                string
            </td>
        </tr>
        <tr>
            <td>
                kiosk &#8594; site &#8594; <b>taxNumber</b>
            </td>
            <td>
                Site tax number.
            </td>
            <td>
                string
            </td>
        </tr>
        <tr>
            <td>
                kiosk &#8594; site &#8594; <b>address</b>
            </td>
            <td>
                Object with address data. Only for receipt.
            </td>
            <td>
                object
            </td>
        </tr>
        <tr>
            <td>
                kiosk &#8594; site &#8594; address. &#8594; <b>addressLine1</b> 
            </td>
            <td>
                Site address line 1.
            </td>
            <td>
                string
            </td>
        </tr>
        <tr>
            <td>
                kiosk &#8594; site &#8594; address. &#8594; <b>addressLine2</b>
            </td>
            <td>
                Site address line 2.
            </td>
            <td>
                string
            </td>
        </tr>
        <tr>
            <td>
                kiosk &#8594; site &#8594; address. &#8594; <b>city</b>
            </td>
            <td>
                Site city.
            </td>
            <td>
                string
            </td>
        </tr>
        <tr>
            <td>
                kiosk &#8594; site &#8594; address. &#8594; <b>phone</b>
            </td>
            <td>
                Site phone
            </td>
            <td>
                string
            </td>
        </tr>
        <tr>
            <td>
                kiosk &#8594; site &#8594; address. &#8594; <b>postal</b>
            </td>
            <td>
                Site address postal code.
            </td>
            <td>
                string
            </td>
        </tr>
        <tr>
            <td>
                kiosk &#8594; site &#8594; address. &#8594; <b>state</b>
            </td>
            <td>
                Site state.
            </td>
            <td>
                string
            </td>
        </tr>
        <tr>
            <td>
                <b>customer</b>
            </td>
            <td>
                Object with customer data.
            </td>
            <td>
                object
            </td>
        </tr>
        <tr>
            <td>
                customer. &#8594; <b>email</b> 
            </td>
            <td>
                Customer email.
            </td>
            <td>
                string
            </td>
        </tr>
        <tr>
            <td>
                customer. &#8594; <b>firstName</b>
            </td>
            <td>
                Customer first name.
            </td>
            <td>
                string
            </td>
        </tr>
        <tr>
            <td>
                customer. &#8594; <b>lastName</b>
            </td>
            <td>
                Customer last name.
            </td>
            <td>
                string
            </td>
        </tr>
        <tr>
            <td>
                <b>cart</b>
            </td>
            <td>
                Object with cart data.
            </td>
            <td>
                object
            </td>
        </tr>
        <tr>
            <td>
                cart &#8594; <b>mode</b>
            </td>
            <td>
                Order mode.
            </td>
            <td>
                string: <code>TAKEAWAY | DINE_IN</code>
            </td>
        </tr>
        <tr>
            <td>
                cart &#8594; <b>items</b>
            </td>
            <td>
                Array with cart items data.
            </td>
            <td>
                array
            </td>
        </tr>
        <tr>
            <td>
                cart &#8594; items &#8594; <b>price</b>
            </td>
            <td>
                Product total price, including extra generated by customisations.
            </td>
            <td>
                number
            </td>
        </tr>
        <tr>
            <td>
                cart &#8594; items &#8594; <b>quantity</b>
            </td>
            <td>
                Product quantity.
            </td>
            <td>
                number
            </td>
        </tr>
        <tr>
            <td>
                cart &#8594; items &#8594; <b>product</b>
            </td>
            <td>
                Object with supersonic product. 
            </td>
            <td>
                object
            </td>
        </tr>
        <tr>
            <td>
                cart &#8594; items &#8594; product &#8594; <b>id</b>
            </td>
            <td>
                Product database id. Important:
                <ul>
                    <li>When <code>type: simple | customise | grouped</code>: If
                        <code>SalesItemId</code> and/or <code>MenuItemId</code> have not been sent on
                        product <code>providerData</code>, this <code>id</code> will be used to replace
                        the one that is missing, or both if non of them are sent.</li>
                    <li>When <code>type: combo</code>: This will be the <code>MenuItemId</code> for all
                        its children on <code>comboProducts</code> array.</li>
                </ul>
            </td>
            <td>
                string | number
            </td>
        </tr>
        <tr>
            <td>
                cart &#8594; items &#8594; product &#8594; <b>energyInformation</b>
            </td>
            <td>
                Product energy information. Only for receipt.
            </td>
            <td>
                string
            </td>
        </tr>
        <tr>
            <td>
                cart &#8594; items &#8594; product &#8594; <b>price</b>
            </td>
            <td>
                Product unit price.
            </td>
            <td>
                number
            </td>
        </tr>
        <tr>
            <td>
                cart &#8594; items &#8594; product &#8594; <b>type</b>
            </td>
            <td>
                Product type.
            </td>
            <td>
                string: <code>combo | grouped | customise | simple</code>.
            </td>
        </tr>
        <tr>
            <td>
                cart &#8594; items &#8594; product &#8594; <b>name</b>
            </td>
            <td>
                Product name.
            </td>
            <td>
                string
            </td>
        </tr>
        <tr>
            <td>
                cart &#8594; items &#8594; product &#8594; <b>providerData</b>
            </td>
            <td>
                Object with specific product aloha data.
            </td>
            <td>
                object
            </td>
        </tr>
        <tr>
            <td>
                cart &#8594; items &#8594; product &#8594; providerData &#8594; <b>PromoId</b>
            </td>
            <td>
                Combo promo id. Only for <code>type: combo</code>.
            </td>
            <td>
                string | number
            </td>
        </tr>
        <tr>
            <td>
                cart &#8594; items &#8594; product &#8594; providerData &#8594; <b>MenuItemId</b>
            </td>
            <td>
                Product menu id. If it is not sent, <code>product &#8594; id</code> will be used instead on aloha order.
            </td>
            <td>
                string | number
            </td>
        </tr>
        <tr>
            <td>
                cart &#8594; items &#8594; product &#8594; providerData &#8594; <b>SalesItemId</b>
            </td>
            <td>
                Product sales id. If it is not sent, <code>product &#8594; id</code> will be used instead on aloha order.
            </td>
            <td>
                string | number
            </td>
        </tr>
        <tr>
            <td>
                cart &#8594; items &#8594; product &#8594; <b>customisations</b>
            </td>
            <td>
                Array with customisations made by the customer.
            </td>
            <td>
                array
            </td>
        </tr>
        <tr>
            <td>
                cart &#8594; items &#8594; product &#8594; customisations &#8594; <b>categoryId</b>
            </td>
            <td>
                Customisation category id.
            </td>
            <td>
                string | number
            </td>
        </tr>
        <tr>
            <td>
                cart &#8594; items &#8594; product &#8594; customisations &#8594; <b>productId</b>
            </td>
            <td>
                Product id.
            </td>
            <td>
                string | number
            </td>
        </tr>
        <tr>
            <td>
                cart &#8594; items &#8594; product &#8594; customisations &#8594; <b>name</b>
            </td>
            <td>
                Product name.
            </td>
            <td>
                string
            </td>
        </tr>
        <tr>
            <td>
                cart &#8594; items &#8594; product &#8594; customisations &#8594; <b>quantity</b>
            </td>
            <td>
                Product quantity.
            </td>
            <td>
                number
            </td>
        </tr>
        <tr>
            <td>
                cart &#8594; items &#8594; product &#8594; customisations &#8594; <b>isDefault</b>
            </td>
            <td>
                If the product is a default customisation.
            </td>
            <td>
                boolean
            </td>
        </tr>
        <tr>
            <td>
                cart &#8594; items &#8594; product &#8594; customisations &#8594; <b>defaultQuantity</b>
            </td>
            <td>
                Product default quantity.
            </td>
            <td>
                number
            </td>
        </tr>
        <tr>
            <td>
                cart &#8594; items &#8594; product &#8594; customisations &#8594; <b>providerData</b>
            </td>
            <td>
                Object with specific modifier aloha data.
            </td>
            <td>
                object
            </td>
        </tr>
        <tr>
            <td>
                cart &#8594; items &#8594; product &#8594; customisations &#8594; providerData &#8594; <b>DefaultReason</b>
            </td>
            <td>
                Identify a recipe default customisation. When <code>1</code>, the customisation will only be sent to
                aloha if <code>quantity !== defaultQuantity</code>.
            </td>
            <td>
                number
            </td>
        </tr>
        <tr>
            <td>
                cart &#8594; items &#8594; product &#8594; <b>comboProducts</b>
            </td>
            <td>
                Array with combo products.
            </td>
            <td>
                array
            </td>
        </tr>
        <tr>
            <td>
                cart &#8594; items &#8594; product &#8594; comboProducts. &#8594; <b>id</b>
            </td>
            <td>
                Product id.
            </td>
            <td>
                string | number
            </td>
        </tr>
        <tr>
            <td>
                cart &#8594; items &#8594; product &#8594; comboProducts. &#8594; <b>name</b>
            </td>
            <td>
                Product name.
            </td>
            <td>
                string
            </td>
        </tr>
        <tr>
            <td>
                cart &#8594; items &#8594; product &#8594; comboProducts. &#8594; <b>customisations</b>
            </td>
            <td>
                Array with product customisations. The same
                structure as <code>cart &#8594; items &#8594; product &#8594; customisations</code>.
            </td>
            <td>
                array
            </td>
        </tr>
    </tbody>
</table>

<h3>Response</h3>
<p>The JSON response has the same properties and structure as the request but with the properties below added or updated:</p>
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Type</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <b>id</b>
            </td>
            <td>
                Database generated id.
            </td>
            <td>
                string
            </td>
        </tr>
        <tr>
            <td>
                <b>date</b>
            </td>
            <td>
                Order date <code>YYYY-MM-DD</code>.
            </td>
            <td>
                string
            </td>
        </tr>
        <tr>
            <td>
                <b>status</b> 
            </td>
            <td>
                Order internal status.
            </td>
            <td>
                string: <code>CREATED | ERROR</code>
            </td>
        </tr>
        <tr>
            <td>
                <b>orderId</b>
            </td>
            <td>
                Aloha order id.
            </td>
            <td>
                number
            </td>
        </tr>
        <tr>
            <td>
                <b>total</b>
            </td>
            <td>
                Order total price updated.
            </td>
            <td>
                string
            </td>
        </tr>
        <tr>
            <td>
                <b>financialSummary</b>
            </td>
            <td>
                Order financial summary. Values from aloha.
            </td>
            <td>
                object
            </td>
        </tr>
        <tr>
            <td>
                financialSummary &#8594; <b>total</b>
            </td>
            <td>
                Order total price.
            </td>
            <td>
                number
            </td>
        </tr>
        <tr>
            <td>
                financialSummary &#8594; <b>taxes</b>
            </td>
            <td>
                Order taxes. <code>Fees + Tip + Tax</code>.
            </td>
            <td>
                number
            </td>
        </tr>
        <tr>
            <td>
                financialSummary &#8594; <b>savedAmount</b>
            </td>
            <td>
                Order saved amount.
            </td>
            <td>
                number
            </td>
        </tr>
        <tr>
            <td>
                settings &#8594; <b>promiseDataTime</b>
            </td>
            <td>
                Date used to order on aloha.
            </td>
            <td>
                string
            </td>
        </tr>
        <tr>
            <td>
                cart &#8594; item &#8594; <b>price</b>
            </td>
            <td>
                Product total price updated from aloha, including extra prices generated by customisations.
            </td>
            <td>
                number
            </td>
        </tr>
        <tr>
            <td>
                cart &#8594; item &#8594; product &#8594; <b>price</b>
            </td>
            <td>
                Product unit price updated from aloha.
            </td>
            <td>
                number
            </td>
        </tr>
    </tbody>
</table>

