import { getSession } from 'next-auth/client'

import db from 'lib/db';
import DataUtils from 'lib/datautils';


// GET /api/entry/:id
const handleGet = async (request, response, sessionUser) => {
    const { query: { id } } = request;
    const params = DataUtils.findByIdParams(sessionUser, id);
    const results = await db.query(params);

    if (!results || results.Count === 0) {
        response.status(404).json({error: `Entry ${id} not found.`});
    }
    else {
        // let's log some debug info... we'll have to watch ScannedCount
        console.log(`/api/entry/:id - ScannedCount: ${results.ScannedCount}`);
        const result = results.Items[0];
        response.json(result);
    }
};

// GET, UPDATE, & DELETE methods require a
// valid session. All of these look up the
// entry by assuming sessionUser === author
export default async function handle(request, response) {
    const session = await getSession({
        req: request
    });

    if (session) {
        const sessionUser = session.user.email;

        if (request.method === 'GET') {
            await handleGet(request, response, sessionUser);
        }
        else if (request.method === 'UPDATE') {
            // handleUpdate
        }
        else if (request.method === 'DELETE') {
            // handleDelete
        }
    }
    else {
        response.status(401).json({
            error: 'Not authorized.'
        });
    }
};
