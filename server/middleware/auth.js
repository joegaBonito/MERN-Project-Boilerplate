import jwt from 'jsonwebtoken';

const auth = async (req,res,next) => {
    try {
        console.log(req.headers);
        const token = req.headers.authorization.split(" ")[1];
        const isCustomAuth = token.length < 500;

        let decodedData;

        if(token && isCustomAuth) {
            //Your Authentication
            decodedData = jwt.verify(token,'test');
            console.log('decodedData ===> ' + JSON.stringify(decodedData));
            req.userId = decodedData?.id;
            // console.log('req.userId ===> ' + req.userId);
        } else {
            //Google OAuth
            decodedData = jwt.decode(token);

            req.userId = decodedData?.sub;
            // console.log('req.userId ===> ' + req.userId);
        }

        next();
    } catch (error) {
        console.log(error);
    }
}

export default auth;