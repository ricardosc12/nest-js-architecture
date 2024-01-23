import {
	WebSocketGateway,
	SubscribeMessage,
	MessageBody,
	ConnectedSocket,
	WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
	cors: {
		origin: '*',
	},
})
export class ChatGateway {
	@WebSocketServer()
	server: Server;

	@SubscribeMessage('joinRoom')
	handleJoinRoom(@MessageBody() data: { room: string }, @ConnectedSocket() client: Socket) {
		const { room } = data;
		client.join(room);
		this.server.to(room).emit('userJoined', { userId: client.id });
	}

	@SubscribeMessage('leaveRoom')
	handleLeaveRoom(@MessageBody() data: { room: string }, @ConnectedSocket() client: Socket) {
		const { room } = data;
		client.leave(room);
		this.server.to(room).emit('userLeft', { userId: client.id });
	}

	@SubscribeMessage('sendMessage')
	handleMessage(@MessageBody() data: { room: string; message: string, userId: string }) {
		this.server.to(data.room).emit('newMessage', data);
	}
}